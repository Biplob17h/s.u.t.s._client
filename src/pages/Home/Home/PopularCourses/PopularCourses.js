import React, { useEffect, useState } from "react";
import PopularSingle from "./PopularSingle";

const PopularCourses = () => {
  // all state
  const [popular, setPopular] = useState([]);

  // useEffect
  useEffect(() => {
    fetch("popularHome.json")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);
  return (
    <div className="text-center mt-32">
      <div className="mx-5 md:mx-52">
        <h1 className="text-4xl font-bold md:text-5xl">Popular Courses</h1>
        <p className="text-[18px] text-start opacity-90 mt-7 mb-20 md:text-center md:text-xl">
          Explore our Popular Courses - a diverse range of subjects, expert
          faculty, and transformative learning experiences. Enroll now to shape
          your future!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:mx-20 md:grid-cols-4">
        {popular.map((p) => (
          <PopularSingle key={p._id} p={p} _id={p._id}></PopularSingle>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
