import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      <dialog
        id="register"
        className="modal  transition delay-300 duration-500">
        <form
          onSubmit={handleSubmit}
          method="dialog"
          className="modal-box rounded-none">
          <h1 className="text-center text-3xl font-semibold my-3">
            User Registration
          </h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="User Name"
            className="input input-bordered w-full rounded-none my-2 bg-gray-50 border border-none"
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full rounded-none my-2 bg-gray-50 border border-none"
          />
          <p className="my-2 text-sm font-medium">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <span className="cursor-pointer font-bold">Privacy Policy</span>.
          </p>
          <button
            type="submit"
            className="btn bg-sky-600 w-full hover:bg-slate-500 text-white font-semibold rounded-none my-2">
            REGISTER
          </button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Register;
