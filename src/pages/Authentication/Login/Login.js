import React, { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextApi/UserContext";

const Login = () => {
  // context api
  const { setUser } = useContext(AuthContext);
  //all State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //login function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://suts-server-sable.vercel.app/api/v1/user/login`,
        {
          email,
          password,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        console.log("Done Login");
        localStorage.setItem("email", email);
        setUser(email);
        setUser(email);
        navigate("/");
      } else {
        toast.error(res.data.message);
        console.log("Went Wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong");
    }
  };
  return (
    <>
      <dialog
        id="login"
        className="modal  transition delay-300 duration-500"
      >
        <form
          onSubmit={handleSubmit}
          method="dialog"
          className="modal-box rounded-none"
        >
          <h1 className="text-center text-3xl font-semibold my-3">
            Login Here
          </h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input input-bordered w-full rounded-none my-2 bg-gray-50 border border-none"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
            placeholder="Password"
            className="input input-bordered w-full rounded-none my-2 bg-gray-50 border border-none"
          />
          <span>
          New to our website ?
            <Link className=" my-2  text-xs hover:text-sky-600">
              register here
            </Link>
          </span>
          <p className="my-2 text-sm font-medium">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <button
            type="submit"
            className="btn bg-sky-600 w-full hover:bg-slate-500 text-white font-semibold rounded-none my-2"
          >
            Login
          </button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Login;
