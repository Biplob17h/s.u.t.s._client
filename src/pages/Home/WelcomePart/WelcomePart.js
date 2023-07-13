import React from "react";

const WelcomePart = () => {
  return (    
      <div className="hero min-h-screen -z-50">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.freepik.com/free-photo/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking_8353-6408.jpg"
            alt=""
            className="w-full"
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome</h1>
            <p className="py-6 text-lg ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> 
            {/* <h1 className="text-5xl font-bold">Latest news</h1>
            <p className="py-6">Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquet. Aenean sollicitudinlorem quis bibendum</p>
            <div className="flex flex-row">
            <img
              src="https://www.londonmet.ac.uk/media/london-metropolitan-university/london-met-photos/london-met-buildingsfacilities/2020/Library.jpg"
              alt=""
              className=" w-32 h-32"
            />
            <div className="pl-5">
              <h1 className="text-[25px] font-semibold">
                Helping Students Is the Key
              </h1>
              <p className="py-2">
                Lorem Ipsn gravida nibh vel velit auctor aliquet
              </p>
              <p>July 20, 2017</p>   
              </div>     
              </div>                        */}
          </div>
        </div>
      </div>
  );
};

export default WelcomePart;
