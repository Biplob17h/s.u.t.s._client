import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerBg from "../../../assets/about/breadcrumb-img-1.jpeg";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiLogoFacebook,BiLogoLinkedin,BiLogoTumblr } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { LiaPinterestP } from "react-icons/lia";

const News = () => {
  // all state
  const [news, setNews] = useState([]);

  // all effect
  useEffect(() => {
    fetch("latestnews.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      <div
        className=" bg-cover mt-24 h-40 bg-center relative"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className=" flex w-full h-full items-center justify-center res-teacherdetailsbanner">
          <h1 className="text-2xl">News</h1>
          <p className=" text-slate-500">
            <Link className=" hover:text-black" to='/'>Home</Link> /{" "}
            <Link className="">News</Link>
          </p>
        </div>
      </div>
      <div>
        {news.map((latestNews) => (
          <div className="my-20">
            <img src={latestNews.image} alt="" className="w-3/4" />
            <h1 className="text-3xl font-semibold pt-10 hover:text-sky-700 transition delay-50 duration-100"><Link>{latestNews.title}</Link></h1>
            <div className="flex gap-5 text-slate-500 font-semibold">
              <p className="flex items-center gap-1">July 17, 2017</p>
              <p className="flex items-center gap-1">
                <AiOutlineHeart />
                21
              </p>
              <p className="flex items-center gap-1">
                <FaRegComment />6
              </p>
            </div>
            <h1 className="text-base text-slate-500 pt-3">{latestNews.news}</h1>
            <span className="divider"></span>
            <div className="flex space-between">
              <div className="flex items-center gap-4 font-semibold uppercase text-sm">
                <Link>{latestNews.tags[0]}</Link>
                <Link>{latestNews.tags[1]}</Link>
                <Link>{latestNews.tags[2]}</Link>
              </div>
              <div className="flex gap-4">
                    <Link className=" text-blue-900 text-lg"><BiLogoFacebook/></Link>
                    <Link className=" text-sky-500 text-lg"><BsTwitter/></Link>
                    <Link className=" text-blue-700 text-lg"><BiLogoLinkedin/></Link>
                    <Link className=" text-blue-900 text-lg"><BiLogoTumblr/></Link>
                    <Link className=" text-red-700 text-lg"><LiaPinterestP/></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
