import React from "react";
import { Link } from "react-router-dom";

const CartTop = () => {
  return (
    <div className="flex flex-row items-center justify-between cusShopBackImg mt-20 h-[220px] px-5 md:px-20">
      <h1 className="text-3xl font-bold text-[#2d76b2] md:text-5xl  ">Cart</h1>
      <div className="flex">
        <Link to="/" className=" md:text-[17px]">
          Home
        </Link>
        <span className="mx-1 md:text-[17px]">/</span>
        <Link to="/shop" className=" md:text-[17px]">
          Courses
        </Link>
        <span className="mx-1 md:text-[17px]">/</span>
        <h1 className="text-[17px] text-[#2d76b2]">Cart</h1>
      </div>
    </div>
  );
};

export default CartTop;
