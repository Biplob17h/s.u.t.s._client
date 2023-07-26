import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../../components/ScrollToTop";

const PopularCoursesSingle = ({ popular }) => {
  const { name, img, id } = popular;
  return (
    <Link
      to={`/course/single/${id}`}
      onClick={ScrollToTop}
      className="mx-5 p-1 flex mt-5 cursor-pointer">
      <img className="w-[100px] rounded" src={img} alt="" />
      <div className="pl-10">
        <h1 className="text-[19px] font-semibold pt-2">{name}</h1>
        <div className="flex text-[17px] mt-1">
          <AiFillStar className="text-[#0693e3]" />
          <AiFillStar className="text-[#0693e3]" />
          <AiFillStar className="text-[#0693e3]" />
          <AiFillStar className="text-[#0693e3]" />
          <BsStarHalf className="text-[#0693e3]" />
        </div>
      </div>
    </Link>
  );
};

export default PopularCoursesSingle;
