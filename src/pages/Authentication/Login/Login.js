import React, { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
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
      const res = await axios.post(`http://localhost:8080/api/v1/user/login`, {
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        console.log("Done Login");
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
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-96 max-w-md shadow-2xl bg-base-100 width">
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <h1 className="text-5xl">Login!</h1>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="input shadow my-1"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="on"
                  className="input shadow my-1"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-sky-400 my-3">
                    Register here!
                  </a>
                </label>
                <button type="submit" className="btn bg-sky-400 mt-6">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
