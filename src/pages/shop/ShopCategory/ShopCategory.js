import React, { useEffect, useState } from "react";
import PopularCoursesSingle from "./PopularCoursesSingle";

const ShopCategory = ({
  setLowest,
  setHighest,
  lowest,
  highest,
  setCategory,
  category,
  setPage,
}) => {
  const [populars, setPopulars] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("popular.json")
      .then((res) => res.json())
      .then((data) => setPopulars(data));
  }, []);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSetCategory = (categoryItem) => {
    setPage(1);
    setCategory(categoryItem.name);
    window.scrollTo(250, 250);
  };

  const lowestOnChenge = (event) => {
    const lowest = document.getElementById("lowest");
    const lowestValue = lowest.value;
    setLowest(lowestValue);
  };
  const highestOnChenge = (event) => {
    const highest = document.getElementById("highest");
    const highestValue = highest.value;
    setHighest(highestValue);
  };
  return (
    <div className="border-l-2 h-[1500px] cusOpenSans ">
      {/* PRICE FILTER  START*/}
      <div className="px-5 mt-10">
        <h1 className="text-2xl font-semibold">Price Filter</h1>
        <h1 className="text-[18px] mt-5">Lowest price</h1>
        <select
          onChange={lowestOnChenge}
          id="lowest"
          className="select select-bordered w-full max-w-xs text-[#0693e3]">
          <option value="100">100</option>
          <option disabled={highest > 200 ? false : true} value="200">
            200
          </option>
          <option disabled={highest > 300 ? false : true} value="300">
            300
          </option>
          <option disabled={highest > 400 ? false : true} value="400">
            400
          </option>
          <option disabled={highest > 500 ? false : true} value="500">
            500
          </option>
          <option disabled={highest > 600 ? false : true} value="600">
            600
          </option>
          <option disabled={highest > 700 ? false : true} value="700">
            700
          </option>
          <option disabled value="800">
            800
          </option>
        </select>

        <h1 className="text-[18px] mt-5">Highest price</h1>
        <select
          onChange={highestOnChenge}
          id="highest"
          className="select select-bordered w-full max-w-xs text-[#0693e3]">
          <option disabled value="100">
            100
          </option>
          <option disabled={lowest > 200 ? true : false} value="200">
            200
          </option>
          <option disabled={lowest > 300 ? true : false} value="300">
            300
          </option>
          <option disabled={lowest > 400 ? true : false} value="400">
            400
          </option>
          <option disabled={lowest > 500 ? true : false} value="500">
            500
          </option>
          <option disabled={lowest > 600 ? true : false} value="600">
            600
          </option>
          <option disabled={lowest > 700 ? true : false} value="700">
            700
          </option>
          <option disabled={lowest > 800 ? true : false} value="800" selected>
            800
          </option>
        </select>
        <div className="flex justify-between mt-3 ">
          <h1 className="mt-3 text-[18px]">
            Price : {lowest}$ - {highest}$
          </h1>
        </div>
      </div>
      {/* POPULAR SCIENCE START */}
      <div className="mt-10 px-5">
        <h1 className="text-2xl font-semibold">Popular Courses</h1>
        {populars.map((popular) => (
          <PopularCoursesSingle
            key={popular.id}
            popular={popular}></PopularCoursesSingle>
        ))}
      </div>
      {/* CATEGORIES START */}
      <div className="mt-10">
        <h1 className="text-2xl mx-5 font-semibold mb-5">Categories</h1>
        {categories.map((categoryItem) => (
          <div
            onClick={() => {
              handleSetCategory(categoryItem);
            }}
            key={categoryItem.id}
            className="mx-10 h-[50px]">
            <h1
              className={`${
                category === categoryItem.name ? "text-[#0693e3]" : ""
              } pl-5 cursor-pointer text-[18px] font-[500] hover:text-[#0693e3]`}>
              {categoryItem.name}
            </h1>
            <hr className="mt-[9px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
