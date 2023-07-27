import React from "react";
import bannerBg from "../../../assets/about/breadcrumb-img-1.jpeg";
import { Link } from "react-router-dom";

const TeacherSingle = () => {
  const teacherJson = localStorage.getItem("teacher");
  const teacher = JSON.parse(teacherJson);
  return (
    <div>
      {/* top banner */}
      <div
        className=" bg-cover overflow-hidden h-[200px] bg-center relative mt-20"
        style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className=" mx-10 mt-16 w-full h-full  md:mt-0 md:mx-0 md:px-20 md:flex md:items-center md:justify-between">
          <h1 className="text-2xl font-semibold">About</h1>
          <p className="mt-3 md:mt-0">
            <Link to="/">Home</Link> / <Link to="/about">About</Link> /
            <span className="text-[#2d76b2]"> {teacher.name}</span>
          </p>
        </div>
      </div>
      {/* main section */}
      <div className="mt-24 flex flex-col-reverse mx-5 md:flex-row md:mx-20">
        {/* info section */}
        <div className="md:w-7/12 mt-20 mb-10 md:mt-0">
          <div>
            <h1 className="text-5xl font-bold ">{teacher.name}</h1>
            <h1 className="text-[18px] font-semibold mt-1">
              {teacher.description}
            </h1>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl font-bold">About {teacher.name}</h1>
            <p className="mr-5 mt-4">{teacher.about}</p>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl font-bold">Education</h1>
            <h1 className="mr-5 mt-4 text-[18px]">
              <span className="text-[18px]">1. </span>
              {teacher.education?.e1}
            </h1>
            <h1 className="mr-5 text-[18px]">
              <span className="text-[18px]">2. </span>
              {teacher.education?.e2}
            </h1>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl font-bold">Experience</h1>
            <h1 className="mr-5 mt-4 text-[18px]">
              <span className="text-[18px]">1. </span>
              {teacher.experience?.ex1}
            </h1>
            <h1 className="mr-5 text-[18px]">
              <span className="text-[18px]">2. </span>
              {teacher.experience?.ex2}
            </h1>
            <h1 className="mr-5 text-[18px]">
              <span className="text-[18px]">2. </span>
              {teacher.experience?.ex3}
            </h1>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl font-bold">Skills</h1>
            <h1 className="mr-5 mt-4 text-[18px]">
              <span className="text-[18px]">1. </span>
              {teacher.skills?.s1}
            </h1>
            <h1 className="mr-5 text-[18px]">
              <span className="text-[18px]">2. </span>
              {teacher.skills?.s2}
            </h1>
            <h1 className="mr-5 text-[18px]">
              <span className="text-[18px]">2. </span>
              {teacher.skills?.s3}
            </h1>
          </div>
        </div>
        {/* img section */}
        <div className="md:w-5/12">
          <img src={teacher.image} alt="" />
          <div className="mt-20">
            <div className=" md:w-[430px]">
              <div className="flex justify-between text-xl">
                <h1>Certificates</h1>
                <h1>{teacher.certificates} %</h1>
              </div>
              <progress
                className="progress  md:w-[430px]"
                value={teacher.certificates}
                max="100"></progress>
            </div>
            <div className="mt-10 md:w-[430px] ">
              <div className="flex justify-between text-xl">
                <h1>Education Skills</h1>
                <h1>{teacher.education_skills} %</h1>
              </div>
              <progress
                className="progress  md:w-[430px]"
                value={teacher.education_skills}
                max="100"></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSingle;
