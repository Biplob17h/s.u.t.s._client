import React, { useState } from "react";


const ShopSingleItem = ({ course }) => {
  const [hover, setHover] = useState(false);
  const { img, name, price } = course;
  return (
    <div>
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className=" border relative bg-slate-100 ">
        <img className="h-[230px] p-4 bg-transparent  " src={img} alt="" />
        <div
          className={`${
            hover
              ? " h-[50px] absolute bottom-0 w-full duration-300 ease-in hover:bg-[#434343] cursor-pointer"
              : "h-0 duration-300 absolute bottom-0 w-full opacity-0  -z-10"
          }  bg-[#0693e3] text-center`}>
          <span className="absolute bottom-[14px] start-16 font-bold text-white text-[17px] ">
            ADD TO CART
          </span>
        </div>
      </div>
      <div className="mt-7">
        <h1 className="text-[21px] font-semibold opacity-80 text-center">
          {name}
        </h1>
        <h1 className="text-[#2d76b2] font-semibold text-[19px] mt-1 text-center">
          {price}$
        </h1>
      </div>
    </div>
  );
};

export default ShopSingleItem;
