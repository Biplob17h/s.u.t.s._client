import React from "react";
import './Events.css'

const Events = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-[40px] font-serif font-semibold text-slate-700">
        Newest Events
      </h1>
      <p className=" text-slate-500 text-lg py-6">
        Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor
        aliquetnean sollicitudin, lorem <br /> quis bibendum auci elit consequat
      </p>
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="card w-96 bg-base-100 shadow-xl rounded-none flex-auto md:grow-0">
          <figure className="relative parent">
            <img
              src="https://www.deccanherald.com/sites/dh/files/article_images/2018/12/16/file731sxd6cdoy8ftg8o6j-1544980089.jpg"
              alt="Shoes"
              className="child h-[300px]"
            />
            <div className=" absolute top-0 left-0  w-[80px] h-[60px] bg-sky-600 child2">
              <p className=" text-lg font-medium text-white mt-3">Running</p>
            </div>
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Chess Tournament</h2>
            <div className="divider"></div>
            <p> November 22, 2023 @ 10:00 am - November 22, 2024 @ 9:00 pm</p>
            <p>24 Wiley Ave, East York</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl rounded-none flex-auto md:grow-0">
          <figure className="relative parent">
            <img
              src="https://media.licdn.com/dms/image/C5622AQFOXS6XRNc9MQ/feedshare-shrink_800/0/1666147358313?e=2147483647&v=beta&t=TuELGqdFGT9Hov5j5zwD6qADcfVvMkhZ-9te61_MGWI"
              alt="Shoes"
              className="child h-[300px]"
            />
            <div className=" absolute top-0 left-0 w-[120px] h-[60px] bg-sky-600 child2">
              <p className=" text-lg font-medium text-white mt-3">Upcomeing</p>
            </div>
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Annual Robotics Competition</h2>
            <div className="divider"></div>
            <p> November 22, 2024 @ 10:00 am - November 22, 2025 @ 9:00 pm</p>
            <p>24 Wiley Ave, East York</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl rounded-none md:grow-0">
          <figure className="relative parent">
            <img
              src="https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/uwgsports.com/images/2022/12/17/AE5I6823.jpg"
              alt="Shoes"
              className="child h-[300px]"
            />
            <div className=" absolute top-0 left-0 w-[120px] h-[60px] bg-sky-600 child2">
              <p className=" text-lg font-medium text-white mt-3">Upcomeing</p>
            </div>
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Basketball Championship 2024</h2>
            <div className="divider"></div>
            <p> November 22, 2024 @ 10:00 am - November 30, 2024 @ 9:00 pm</p>
            <p>24 Wiley Ave, East York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
