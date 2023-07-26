import React, { useState } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import testIcon from "../../../../assets/icons/2916315.png";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../../../components/ScrollToTop";

const PopularSingle = ({ p, _id}) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={`/course/single/${_id}`}
      onClick={ScrollToTop}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      key={p._id}
      className={`border cursor-pointer mb-20 mx-10 md:mx-0 ${
        hover ? "scale-[1.02] duration-1000" : ""
      }`}>
      <img className="h-[200px] w-full rounded md:w-[300px]" src={p?.img} alt="" />
      <div className="mx-2 mb-20 h-[150px]">
        <div className="flex justify-between mt-8 items-center">
          <h1 className="text-start font-semibold text-xl">{p.name}</h1>
          <h1 className="p-2 bg-[#2d76b2] text-white font-semibold">
            {p.price}
          </h1>
        </div>
        <h1 className="text-start font-xl mt-2">{p.teacher}</h1>
        <h1 className="mt-10 font-xl opacity-90 font-[400] text-start">
          {p.description}
        </h1>
      </div>
      <div className="bg-[#434343] h-[1px] w-full mb-5"></div>
      <div className="flex h-[40px] items-center justify-between mx-2 text-[18px]">
        <div className="flex items-center tooltip" data-tip="Total Sits">
          <BsFillPeopleFill className="text-[#434343] mr-2" />
          <p>{p.seats}</p>
        </div>
        <div className="flex items-center tooltip" data-tip="Total Tests">
          <img src={testIcon} alt="" className="text-[#434343] mr-2 w-[20px]" />
          <p>{p.seats}</p>
        </div>
        <div className="flex items-center tooltip" data-tip="Reating">
          <AiFillStar className="text-[#434343] mr-2" />
          <p>{p.rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default PopularSingle;
