import React from "react";
import ShopItem from "../ShopItem/ShopItem";
import ShopCategory from "../ShopCategory/ShopCategory";

const ShopBody = () => {
  

  return (
    <div className="flex">
      <div className="w-8/12 mx-5">
        <ShopItem></ShopItem>
      </div>
      <div className="w-4/12 cusbor1">
        <ShopCategory></ShopCategory>
      </div>
    </div>
  );
};

export default ShopBody;
