import React from "react";
import './Events.css'

const Events = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-[40px] font-serif font-semibold text-slate-700">Newest Events</h1>
      <p className=" text-slate-500 text-lg py-6">Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquetnean sollicitudin, lorem <br /> quis bibendum auci elit consequat</p>
      <div className="flex gap-6 sm:flex-col md:flex-row md:flex-wrap">
        <div className="card w-96 bg-base-100 shadow-xl rounded-none flex-auto md:grow-0">
          <figure className="relative parent">
            <img
              src="https://www.adelaide.edu.au/student/sites/default/files/styles/ua_landscape/public/media/images/2021-04/graduations-01384.jpg?h=32947a1d&itok=GKbOUJp6"
              alt="Shoes" className="child"
            />
            <div className=" absolute top-0 left-0 w-[60px] h-[60px] bg-sky-600 child2">
                <p className=" text-lg font-medium text-white">22</p>
                <p className=" text-lg font-medium text-white">Nov</p>
            </div>
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Graduation</h2>
            <div className="divider"></div>
            <p> November 22, 2024 @ 10:00 am - November 22, 2029 @ 9:00 pm</p>  
            <p>24 Wiley Ave, East York</p>          
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl rounded-none flex-auto md:grow-0">
          <figure className="relative parent">
            <img
              src="https://www.adelaide.edu.au/student/sites/default/files/styles/ua_landscape/public/media/images/2021-04/graduations-01384.jpg?h=32947a1d&itok=GKbOUJp6"
              alt="Shoes" className="child"
            />
            <div className=" absolute top-0 left-0 w-[60px] h-[60px] bg-sky-600 child2">
                <p className=" text-lg font-medium text-white">22</p>
                <p className=" text-lg font-medium text-white">Nov</p>
            </div>
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Graduation</h2>
            <div className="divider"></div>
            <p> November 22, 2024 @ 10:00 am - November 22, 2029 @ 9:00 pm</p>  
            <p>24 Wiley Ave, East York</p>          
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl rounded-none md:grow-0">
          <figure className="relative parent">
            <img
              src="https://www.adelaide.edu.au/student/sites/default/files/styles/ua_landscape/public/media/images/2021-04/graduations-01384.jpg?h=32947a1d&itok=GKbOUJp6"
              alt="Shoes" className="child"
            />
            <div className=" absolute top-0 left-0 w-[60px] h-[60px] bg-sky-600 child2">
                <p className=" text-lg font-medium text-white">22</p>
                <p className=" text-lg font-medium text-white">Nov</p>
            </div>
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Graduation</h2>
            <div className="divider"></div>
            <p> November 22, 2024 @ 10:00 am - November 22, 2029 @ 9:00 pm</p>  
            <p>24 Wiley Ave, East York</p>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
