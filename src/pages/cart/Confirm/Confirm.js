import React from "react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <div className="">
      {/* for smaill div */}
      <div className="block mt-40 md:hidden">
        <Confetti width={385}></Confetti>
        <h1 className="text-4xl font-bold text-center text-[#0693e3]">
          Congratulation
        </h1>
        <h1 className="mt-10 text-xl text-center font-bold text-[#434343]">
          Wellcome to Stanford University of Technology and Science (SUTS)
        </h1>
        <div className="mt-10 p-10 text-start border">
          <h1 className="text-xl font-semibold">Dear Enrolling Student,</h1>
          <p>
            Welcome to our university! As the Vice-Chancellor, I am thrilled to
            have you join our vibrant academic community. Get ready to embark on
            an inspiring journey of knowledge, growth, and limitless
            opportunities. Together, we'll shape a brighter future!
          </p>
          <h1 className="mt-5">With best wishes,</h1>
          <h1 className="mt-5 text-xl font-bold text-[#0693e3]">
            Joseph White{" "}
          </h1>
          <p>Vice Chancellor,</p>
          <p>Stanford University of Technology and Science</p>
        </div>
        <div className="flex justify-end mr-5 mb-10">
          <Link
            to={`/`}
            className="mt-5  text-[18px] font-semibold cusOpenSans text-white  bg-[#2d76b2] text-center pt-3 cursor-pointer h-[50px] w-[190px] hover:bg-[#434343]">
            Go to Home
          </Link>
        </div>
      </div>
      {/* for big div */}
      <div className="hidden mt-20 text-center  h-[110vh] md:block">
        <Confetti width={1280}></Confetti>
        <h1 className="text-6xl font-bold text-[#0693e3]">Congratulation</h1>
        <h1 className="mt-10 text-2xl font-bold text-[#434343]">
          Wellcome to Stanford University of Technology and Science (SUTS)
        </h1>
        <div className="mt-10 mx-80 p-10 text-start border">
          <h1 className="text-xl font-semibold">Dear Enrolling Student,</h1>
          <p>
            Welcome to our university! As the Vice-Chancellor, I am thrilled to
            have you join our vibrant academic community. Get ready to embark on
            an inspiring journey of knowledge, growth, and limitless
            opportunities. Together, we'll shape a brighter future!
          </p>
          <h1 className="mt-5">With best wishes,</h1>
          <h1 className="mt-5 text-xl font-bold text-[#0693e3]">
            Joseph White{" "}
          </h1>
          <p>Vice Chancellor,</p>
          <p>Stanford University of Technology and Science</p>
        </div>
        <div className="flex justify-end mr-20">
          <Link
            to={`/`}
            className="mt-5  text-[18px] font-semibold cusOpenSans text-white  bg-[#2d76b2] text-center pt-3 cursor-pointer h-[50px] w-[190px] hover:bg-[#434343]">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
