import React from 'react';
import { Link } from 'react-router-dom';
import bannerBg from '../../../assets/about/breadcrumb-img-1.jpeg'
import '../About.css'

const TeacherDetailsBanner = () => {
    return (
      <div
        className=" bg-cover overflow-hidden h-56 bg-center relative"
        style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className=" flex w-full h-full items-center justify-center banner res-teacherdetailsbanner">
          <h1 className="text-2xl">About</h1>
          <p>
            <Link to='/'>Home</Link> / <span className="text-[#2d76b2]">About</span>
          </p>
        </div>
      </div>
    );
};

export default TeacherDetailsBanner;