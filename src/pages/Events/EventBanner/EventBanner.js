import React from 'react';
import bannerbg from "../../../assets/about/breadcrumb-img-1.jpeg";
import { Link } from "react-router-dom";


const EventBanner = () => {
    return (
        <div
        className="bg-cover mt-24 h-40 bg-center relative"
        style={{ backgroundImage: `url(${bannerbg})` }}
      >
        <div className=" flex w-full h-full items-center justify-center res-teacherdetailsbanner">
          <h1 className="text-2xl">Events</h1>
          <p className=" text-slate-500">
            <Link className=" hover:text-black" to="/">
              Home
            </Link>{" "}
            / <Link>Events</Link>
          </p>
        </div>
      </div>
    );
};

export default EventBanner;