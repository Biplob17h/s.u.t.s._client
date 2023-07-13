import React from "react";
import img1 from "../../../../assets/course-img-2.jpeg";
import img2 from "../../../../assets/course-img-3.jpg";
import img3 from "../../../../assets/course-img-4.jpg";
import img4 from "../../../../assets/course-img-5.jpg";
import { BsPeople } from 'react-icons/bs'
import { IoTimeOutline } from 'react-icons/io5'
import { Link } from "react-router-dom";
const PopularCourses = () => {
  return (
    <div className="flex flex-col justify-center items-center my-32">
      <h1 className="text-4xl text-[#434343] font-bold">Popular Courses</h1>
      <p className=" px-44 py-10  text-center text-slate-400">
        Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor
        aliquet. Aenean sollicitudinlorem quis bibendum auci elit consequat
        ipsutis sem nibh id elitduis sed
      </p>
      <div className="grid grid-cols-4 gap-6">
        <div className="card rounded-none border border-slate-200 w-[302px] h-[434px]  relative parent bg-base-100">
          <figure className="">
            <img src={img1} alt="Shoes" className="child" />
          </figure>
          <div className="card-body">
            <div className="flex items-center space-x-20">
            <Link className="card-title text-[#434343] hover:text-[#2D76B2]">Photography</Link>
            <p className="w-[40px] h-[26px] bg-[#2D76B2] text-center text-white">120</p>
            </div>
            <p>
              <Link className="text-slate-400 hover:text-black">Amy Drufense</Link>
            </p>
            <p>
              <Link>
                Blandit accumsan ei vis, maiorum epicurei at mei nibh viderer
                ius pri
              </Link>
            </p>
            <span className="border border-slate-200 w-full h-0"></span>
            <div className="flex space-x-5">
                <Link className="flex items-center"><BsPeople/> 1</Link>
                <Link className="flex items-center"><IoTimeOutline/> 2 hours</Link>
            </div>
          </div>
        </div>
        <div className="card rounded-none border border-slate-200 relative parent w-[302px] h-[434px] bg-base-100">
          <figure>
            <img src={img2} alt="Shoes" className=" child" />
          </figure>
          <div className="card-body">
            <div className="flex items-center space-x-20">
            <Link className="card-title text-[#434343] hover:text-[#2D76B2]">Photography</Link>
            <p className="w-[40px] h-[26px] bg-[#2D76B2] text-center text-white">120</p>
            </div>
            <p>
              <Link className="text-slate-400 hover:text-black">Amy Drufense</Link>
            </p>
            <p>
              <Link>
                Blandit accumsan ei vis, maiorum epicurei at mei nibh viderer
                ius pri
              </Link>
            </p>
            <span className="border border-slate-200 w-full h-0"></span>
            <div className="flex space-x-5">
                <Link className="flex items-center"><BsPeople/> 1</Link>
                <Link className="flex items-center"><IoTimeOutline/> 2 hours</Link>
            </div>
          </div>
        </div>
        <div className="card rounded-none border border-slate-200 relative parent w-[302px] h-[434px] bg-base-100">
          <figure>
            <img src={img3} alt="Shoes" className=" child" />
          </figure>
          <div className="card-body">
            <div className="flex items-center space-x-20">
            <Link className="card-title text-[#434343] hover:text-[#2D76B2]">Photography</Link>
            <p className="w-[40px] h-[26px] bg-[#2D76B2] text-center text-white">120</p>
            </div>
            <p>
              <Link className="text-slate-400 hover:text-black">Amy Drufense</Link>
            </p>
            <p>
              <Link>
                Blandit accumsan ei vis, maiorum epicurei at mei nibh viderer
                ius pri
              </Link>
            </p>
            <span className="border border-slate-200 w-full h-0"></span>
            <div className="flex space-x-5">
                <Link className="flex items-center"><BsPeople/> 1</Link>
                <Link className="flex items-center"><IoTimeOutline/> 2 hours</Link>
            </div>
          </div>
        </div>
        <div className="card rounded-none border border-slate-200 relative parent w-[302px] h-[434px] bg-base-100">
          <figure>
            <img src={img4} alt="Shoes" className=" child" />
          </figure>
          <div className="card-body">
            <div className="flex items-center space-x-20">
            <Link className="card-title text-[#434343] hover:text-[#2D76B2]">Photography</Link>
            <p className="w-[40px] h-[26px] bg-[#2D76B2] text-center text-white">120</p>
            </div>
            <p>
              <Link className="text-slate-400 hover:text-black">Amy Drufense</Link>
            </p>
            <p>
              <Link>
                Blandit accumsan ei vis, maiorum epicurei at mei nibh viderer
                ius pri
              </Link>
            </p>
            <span className="border border-slate-200 w-full h-0"></span>
            <div className="flex space-x-5">
                <Link className="flex items-center"><BsPeople/> 1</Link>
                <Link className="flex items-center"><IoTimeOutline/> 2 hours</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
