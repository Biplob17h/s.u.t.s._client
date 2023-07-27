import React from "react";
import teacherImg from "../../../assets/about/teachers-1.jpeg";
import { BsCheck } from "react-icons/bs";
import "../About.css";
import { Link } from "react-router-dom";
import bannerBg from "../../../assets/about/breadcrumb-img-1.jpeg";

const TeacherDetails = () => {
  return (
    <div>
      <div
        className=" bg-cover overflow-hidden h-56 bg-center relative"
        style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className=" flex w-full h-full items-center justify-center banner res-teacherdetailsbanner">
          <h1 className="text-2xl">About</h1>
          <p>
            <Link to="/">Home</Link> / <Link to="/about">About /</Link>
            <span className="text-[#2d76b2]"> Teacher Single</span>
          </p>
        </div>
      </div>
      <div className="flex res-teacherdetails">
        <div className=" py-20 res-teacherdetails2">
          <h1 className=" text-4xl font-bold">Joseph White</h1>
          <p className=" text-base py-5">
            Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin,
            lorem quis bibendum auci elit consequat ipsutis sem nibh id elit
            dicat mollis
          </p>
          <h2 className="text-lg font-semibold pt-5">Education</h2>
          <p className=" text-sm py-3">
            Congue mollis felis tortor id. Sed aliquet amet sit vitae commodo
            commodo ultricies lectus. A nullam consequat sociis lectus erat.
            Suscipit ridiculus quis ante cras mauris faucibus nunc vel vel et
            sed. Sodales nulla ut. Placerat sem sed. Sed et sed turpis amet nisl
            eros risus a eu cras fringilla. Ac porta adipiscing. Eros sit
            mauris. Odio sed
          </p>
          <p className="text-sm py-2 flex">
            <BsCheck className="text-lg" />
            We Enrich Lives Through Learning.
          </p>
          <p className="text-sm py-2 flex">
            <BsCheck className="text-lg" />
            Guiding the young generation to success.
          </p>
          <h1 className="text-lg font-semibold pt-5">Experience</h1>
          <p className="text-sm pt-3">
            Congue mollis felis tortor id. Sed aliquet amet sit vitae commodo
            commodo ultricies lectus. A nullam consequat sociis lectus erat.
            Suscipit ridiculus quis ante cras mauris faucibus nunc vel vel et
            sed. Sodales nulla ut. Placerat sem sed. Sed et sed turpis amet nisl
            eros risus a eu cras fringilla. Ac porta adipiscing. Eros sit
            mauris. Odio sed
          </p>
          <h1 className="text-lg font-semibold pt-5">Skills</h1>
          <p className="text-sm pt-3">
            Congue mollis felis tortor id. Sed aliquet amet sit vitae commodo
            commodo ultricies lectus. A nullam consequat sociis lectus erat.
            Suscipit ridiculus quis ante cras mauris faucibus nunc vel vel et
            sed. Sodales nulla ut. Placerat sem sed. Sed et sed.
          </p>
        </div>
        <div className="res-teacherdetails3">
          <img src={teacherImg} alt="" />
          <div className="">
            <div className="flex res-progress">
              <p className="text-sm pt-5">Certificates</p>
              <p className="text-sm pt-5">75%</p>
            </div>
            <progress
              className="progress progress-primary w-full"
              value="75"
              max="100"></progress>
          </div>
          <div className="">
            <div className="flex res-progress">
              <p className="text-sm pt-5">Education Skills</p>
              <p className="text-sm pt-5">95%</p>
            </div>
            <progress
              className="progress progress-primary w-full"
              value="95"
              max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
