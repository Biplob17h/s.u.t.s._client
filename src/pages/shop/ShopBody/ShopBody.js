import React, { useEffect, useState } from "react";
import ShopItem from "../ShopItem/ShopItem";
import ShopCategory from "../ShopCategory/ShopCategory";

const ShopBody = () => {
  const [courses, setCourses] = useState([]);
  const [sort, setSort] = useState("default");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [dataCount, setDataCount] = useState(0);
  const [lowest, setLowest] = useState(100);
  const [highest, setHighest] = useState(800);

  useEffect(() => {
    fetch(
      `http://localhost:8080/api/v1/courses?sort=${sort}&category=${category}&gt=${lowest}&lt=${highest}&page=${page}&limit=${15}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDataCount(data.length);
        setCourses(data);
      });
  }, [sort, category, lowest, highest, page]);
  return (
    <div className="cusText md:flex md:pt-24 ">
      <div className=" md:mx-5 md:w-8/12">
        <ShopItem
          courses={courses}
          setSort={setSort}
          page={page}
          setPage={setPage}
          dataCount={dataCount}
          category={category}></ShopItem>
      </div>
      <div className="w-full md:w-4/12 ">
        <ShopCategory
          setLowest={setLowest}
          setHighest={setHighest}
          setCategory={setCategory}
          setPage={setPage}
          lowest={lowest}
          highest={highest}
          category={category}></ShopCategory>
      </div>
    </div>
  );
};

export default ShopBody;
