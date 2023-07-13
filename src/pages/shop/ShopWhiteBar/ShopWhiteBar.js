import React from "react";
import { Link } from "react-router-dom";

const ShopWhiteBar = () => {
  return (
    <div className="h-[200px] cusShopBackImg px-20 ">
      <div className="flex items-center pt-[80px] justify-between">
        <h1 className="text-5xl font-bold ">Courses</h1>
        <div className="flex">
          <Link to="/" className="text-[17px]">
            Home
          </Link>
          <span className="mx-1 text-[17px]">/</span>
          <h1 className="text-[17px]">course</h1>
        </div>
      </div>
    </div>
  );
};

export default ShopWhiteBar;
