import React, { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextApi/UserContext";
import logo from "../../../assets/logo/suts-logo.png";

const Login = () => {
  // context api
  const { setUser } = useContext(AuthContext);
  //all State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  //login function
  const from = location.state?.from?.pathname || "/";
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
        navigate(from, { replace: true });
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
    <div className="my-40 md:flex md:justify-around mx-0">
      <img className="w-96" src={logo} alt="" />
      <form onSubmit={handleSubmit} className="modal-box rounded-none ">
        <h1 className="text-center text-3xl font-semibold my-3">Login Here</h1>
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
        <span className=" text-[18px]">
          New to our website ?
          <Link
            to="/register"
            className=" my-2  text-[18px] hover:text-sky-600">
            &#32; &#32;Register here
          </Link>
        </span>
        <p className="my-2 text-sm font-medium">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{" "}
          <span className="cursor-pointer font-bold">Privacy Policy</span>.
        </p>
        <button
          type="submit"
          className="btn bg-sky-600 w-full hover:bg-slate-500 text-white font-semibold rounded-none my-2">
          Login
        </button>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </div>
  );
};

export default Login;
