import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { AuthContext } from "../../contextApi/UserContext";
import { toast } from "react-hot-toast";
import { OrderContext } from "../../contextApi/HandleOrderContext";
import PrivateRoutes from "../../../routes/PrivateRoutes";

const CourseSingle = () => {
  // context api
  const { user } = useContext(AuthContext);
  const { orderLength, setOrderLength } = useContext(OrderContext);

  // load data
  const course = useLoaderData();

  // all state
  const [info, setInfo] = useState("description");
  const [bought, setBought] = useState(false);
  const [study, setStduy] = useState(false);

  // use Effect
  useEffect(() => {
    fetch(`https://suts-server-sable.vercel.app/api/v1/order?email=${user}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((c) => {
          if (c?.course?.name === course?.name) {
            setBought(true);
          } else {
            setBought(false);
          }
        });
      });
  });
  useEffect(() => {
    fetch(`https://suts-server-sable.vercel.app/api/v1/study?email=${user}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((s) => {
          s?.studies.forEach((c) => {
            if (c?.course?.name === course?.name) {
              setStduy(true);
            }
          });
        });
      });
  });
  console.log(course);
  // function
  const handleAddToCart = () => {
    // create order for database
    const Order = {
      email: user,
      course: course,
    };
    console.log(Order);

    // increase data manually
    setOrderLength(orderLength + 1);

    // post to database
    fetch("https://suts-server-sable.vercel.app/api/v1/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Item add to cart successfully ");
        setBought();
      });
  };

  const testOnClicked = () => {
    console.log("btn clicked");
  };

  return (
    <div className="cusText">
      {/* course top section */}
      <div className="cusShopBackImg mt-40 h-[200px]  md:flex flex-row items-center justify-between px-10 md:px-32">
        <h1 className="text-4xl font-bold pt-10 md:pt-0">Course</h1>
        <span className="text-[18px] ">
          <Link to="/" className="pr-2">
            Home
          </Link>
          /
          <Link to="/shop" className="px-2">
            Courses
          </Link>
          <span onClick={testOnClicked} className="pr-2 text-blue-400">
            /&#32;&#32;Course Single
          </span>
        </span>
      </div>
      {/* course info section */}
      <div className="my-10 mx-5 md:flex md:mx-20">
        <div className="md:w-1/2">
          <img className="h-[450px] rounded" src={course.img} alt="" />
        </div>
        <div className="md:w-1/2 md:ml-10 py-10">
          <h1 className="text-5xl font-bold">{course.name}</h1>
          <StarRatings
            rating={course.rating}
            starDimension="30px"
            starSpacing="5px"
            starRatedColor="#2d76b2"
          />
          <h1 className=" text-[#2d76b2] text-5xl font-bold mt-16">
            {course.price}&#32;$
          </h1>
          <h1 className="text-xl mt-3">{course.description}</h1>

          {bought ? (
            <>
              <h1 className="mt-20 text-[18px] font-semibold cusOpenSans text-white text-center pt-3 cursor-no-drop  h-[50px] w-[190px] bg-[#434343]">
                Already in Cart
              </h1>
            </>
          ) : study ? (
            <div>
              <h1 className="mr-3 mt-20 text-[18px] font-semibold cusOpenSans text-white text-center pt-3 cursor-no-drop  h-[50px] w-full md:w-[190px] bg-[#434343] ">
                Already Studying
              </h1>
            </div>
          ) : (
            <>
              <h1
                onClick={handleAddToCart}
                className="mt-20 text-[18px] font-semibold cusOpenSans text-white  bg-[#2d76b2] text-center pt-3 cursor-pointer h-[50px] w-[190px] hover:bg-[#434343]">
                ADD TO CART
              </h1>
            </>
          )}
        </div>
      </div>
      {/* more info section */}
      <div className="md:flex md:mx-20">
        <h1
          onClick={() => {
            setInfo("description");
          }}
          className={`${
            info === "description" ? "text-[#2d76b2]" : ""
          } text-[17px] border p-4 md:w-[130px] text-center rounded cursor-pointer select-none hover:text-[#2d76b2]`}>
          Description
        </h1>
        <h1
          onClick={() => {
            setInfo("additional");
          }}
          className={`${
            info === "additional" ? "text-[#2d76b2]" : ""
          } text-[17px] border p-4 md:w-[220px] text-center mx-2 rounded cursor-pointer select-none hover:text-[#2d76b2]`}>
          Additional_information
        </h1>
        <h1
          onClick={() => {
            setInfo("reviews");
          }}
          className={`${
            info === "reviews" ? "text-[#2d76b2]" : ""
          } text-[17px] border p-4 md:w-[140px] text-center rounded cursor-pointer select-none hover:text-[#2d76b2]`}>
          Reviews
        </h1>
      </div>
      <div
        className={`${
          info === "description" ? "block" : "hidden"
        } h-full mt-5 mx-2 md:mx-20 mb-20`}>
        <h1>{course.full_description}</h1>
      </div>
      <div
        className={`${
          info === "additional" ? "block" : "hidden"
        }  md:h-[500px] mt-5 mx-5 md:mx-20 mb-20 `}>
        <h1 className="text-2xl font-semibold">Course Name : {course.name}</h1>
        <h1 className="text-[18px] mt-10 text-slate-700 ">
          <span className="font-semibold">Category</span>
          <span className="ml-[61px]">{course.category}</span>
        </h1>
        <h1 className="text-[18px] mt-2 text-slate-700 ">
          <span className="font-semibold">Seats</span>
          <span className="ml-[90px]">{course.seats} only</span>
        </h1>
        <h1 className="text-[18px] mt-2 text-slate-700 ">
          <span className="font-semibold">Course Length</span>
          <span className="ml-[10px]">{course.course_length} months</span>
        </h1>
        <h1 className="text-[18px] mt-2 text-slate-700 ">
          <span className="font-semibold">Course Time</span>
          <span className="ml-[26px]">{course.course_time}</span>
        </h1>
        <h1 className="text-[18px] mt-2 text-slate-700 ">
          <span className="font-semibold">Teacher</span>
          <span className="ml-[68px]">{course.teacher}</span>
        </h1>
        <h1 className="text-[18px] mt-2 text-slate-700 ">
          <span className="font-semibold">Total Tests</span>
          <span className="ml-[43px]">{course.test} tests</span>
        </h1>
        <h1 className="text-[18px] mt-2 text-slate-700 ">
          <span className="font-semibold">Class In Week</span>
          <span className="ml-[15px]">{course.in_week} class</span>
        </h1>
      </div>
      <div
        className={`${
          info === "reviews" ? "block" : "hidden"
        } h-[500px] mt-5 mx-20 mb-20`}>
        <h1 className="text-center font-blod text-5xl mt-20">
          No Reviews Right Now
        </h1>
      </div>
    </div>
  );
};

export default CourseSingle;
