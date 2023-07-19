import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/latestnews/h3-img.jpeg";
import img2 from "../../../assets/latestnews/blog-featured-1-1-550x550.jpeg";

const WelcomePart = () => {
  const [latestNews, setLatestNews] = useState([]);
  useEffect(() => {
    fetch("latestnews.json")
      .then((res) => res.json())
      .then((data) => setLatestNews(data));
  }, []);
  return (
    <div className="flex flex-row my-20">
      <div className="w-1/2 pr-8">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-lg text-slate-500 font-medium py-5">
          I am feeling extremely honored to be standing in front of you all and
          welcoming everyone in this grand celebration.
        </p>
        <img src={img} alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl font-semibold">Latest News</h1>
        <p className="text-lg text-slate-500 font-medium pt-3">
          Etiam porttitor risus massa nec condiment gravida nibh vel velit
          auctor aliquet. Aenean sollicitudinlorem quis bibendum
        </p>
        <div className="flex flex-row pt-8">
          <img src={img2} alt="" className="w-1/4" />
          <div className="pl-4">
            <Link className="text-2xl font-bold">Helping Students Is the Key</Link>
            <p className=" text-base py-2">
              Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum auci
            </p>
            <p>July 20, 2017</p>
          </div>
        </div>
        <div className="flex flex-row pt-8">
          <img src={img2} alt="" className="w-1/4" />
          <div className="pl-4">
            <Link className="text-2xl font-bold">Helping Students Is the Key</Link>
            <p className=" text-base py-2">
              Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum auci
            </p>
            <p>July 20, 2017</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePart;
