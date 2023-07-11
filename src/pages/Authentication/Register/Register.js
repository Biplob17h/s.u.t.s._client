import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  //useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/user/register`,
        { name, email, password }
      );
      if (res.data.success) {
       console.log('register done');
       toast.success(res.data.message);
        navigate('/')
      } else {
        toast.error("Something went wrong");
       console.log('not done');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <h1 className="text-5xl">User Registation</h1>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="User Name"
                  className="input shadow my-1"
                  required
                />
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
                    className="label-text-alt link link-hover text-sky-400 my-3"
                  >
                    Forgot password?
                  </a>
                </label>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
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

export default Register;
