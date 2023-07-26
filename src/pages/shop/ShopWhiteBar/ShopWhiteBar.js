import React from "react";
import { Link } from "react-router-dom";

const ShopWhiteBar = () => {
  return (
    <div className="px-10 pt-10 h-[200px] cusShopBackImg md:px-20 ">
      <div className="md:flex md:items-center md:pt-[80px] md:justify-between">
        <h1 className="text-3xl font-bold text-[#2d76b2] md:text-5xl ">
          Courses
        </h1>
        <div className="flex">
          <Link to="/" className=" md:text-[17px]">
            Home
          </Link>
          <span className="mx-1 md:text-[17px]">/</span>
          <h1 className="text-[17px] text-[#2d76b2]">Courses</h1>
        </div>
      </div>
    </div>
  );
};

export default ShopWhiteBar;
