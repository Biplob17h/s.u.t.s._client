import React, { useEffect, useState } from "react";
import ShopSingleItem from "./ShopSingleItem";

const ShopItem = () => {
  const [courses, setCourses] = useState([]);
  const [sort, setSort] = useState("default");

  const sortValue = (event) => {
    setSort(event.target.value);
  };
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div className="mt-5 flex justify-between mx-10">
        <h1 className="opacity-60 text-[18px] select-none ">
          Showing {courses.length} of {courses.length} results
        </h1>
        <select
          onChange={sortValue}
          className="w-[200px] text-[17px] select-none-">
          <option className="select-none" value="default">
            Default sorting
          </option>
          <option className="select-none" value="price">
            Sort by price
          </option>
          <option className="select-none" value="name">
            Sort by Name(A-Z)
          </option>
        </select>
      </div>
      <div className="grid mt-7 gap-10 grid-cols-3 ">
        {
            courses.map(course => <ShopSingleItem
            key={course._id}
            course={course}
            ></ShopSingleItem>)
        }
      </div>
    </div>
  );
};

export default ShopItem;
