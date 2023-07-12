import React from "react";
import ShopSingleItem from "./ShopSingleItem";

const ShopItem = ({ courses, setSort, page, setPage, category, dataCount }) => {
  const sortValue = (event) => {
    const sort = event.target.value;
    setSort(sort);
  };

  const buttons = [
    {
      id: 1,
      num: 1,
    },
    {
      id: 2,
      num: 2,
    },
    {
      id: 3,
      num: 3,
    },
    {
      id: 4,
      num: 4,
    },
    {
      id: 5,
      num: 5,
    },
  ];

  const handleSetPage = (button) => {
    setPage(button.num);
    window.scrollTo(250, 250);
  };

  return (
    <div>
      <div className="mt-10 flex justify-between mx-10 ">
        <h1 className="opacity-60 text-[18px] select-none ">
          Showing {courses.length} of {category === "All" ? 63 : dataCount}{" "}
          results
        </h1>
        <select
          onChange={sortValue}
          className="w-[200px] text-[17px] select-none-">
          <option className="select-none" value="default">
            Default sorting
          </option>
          <option className="select-none" value="priceLTH">
            Sort by price(Lowest to Highest)
          </option>
          <option className="select-none" value="priceHTL">
            Sort by price(Highest to Lowest)
          </option>
          <option className="select-none" value="name">
            Sort by Name(A-Z)
          </option>
        </select>
      </div>
      <div className="grid mt-7 gap-10 grid-cols-3 ">
        {courses?.map((course) => (
          <ShopSingleItem key={course._id} course={course}></ShopSingleItem>
        ))}
      </div>
      <div>
        <div className={`${category !== "All" ? 'hidden' :''} join flex flex-row justify-end mt-5`}>
          {buttons.map((button) => (
            <button
              onClick={() => {
                handleSetPage(button);
              }}
              className={`${
                page === button.num ? "bg-[#0693e3]" : ""
              } join-item btn`}
              key={button.id}>
              {button.num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
