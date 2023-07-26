import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerBg from "../../../assets/about/breadcrumb-img-1.jpeg";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTumblr } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { LiaPinterestP } from "react-icons/lia";
import img from "../../../assets/latestnews/h3-img.jpeg";

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
            <Link className=" hover:text-black" to="/">
              Home
            </Link>{" "}
            / <Link className="">News</Link>
          </p>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-3/4">
          {news.map((latestNews) => (
            <div className="my-20">
              <img src={latestNews.image} alt="" className="w-3/4" />
              <h1 className="text-3xl font-semibold pt-10 hover:text-sky-700 transition delay-50 duration-100">
                <Link>{latestNews.title}</Link>
              </h1>
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
              <h1 className="text-base text-slate-500 pt-3">
                {latestNews.news}
              </h1>
              <span className="divider"></span>
              <div className="flex space-between">
                <div className="flex items-center gap-4 font-semibold uppercase text-sm">
                  <Link>{latestNews.tags[0]}</Link>
                  <Link>{latestNews.tags[1]}</Link>
                  <Link>{latestNews.tags[2]}</Link>
                </div>
                <div className="flex gap-4">
                  <Link className=" text-blue-900 text-lg">
                    <BiLogoFacebook />
                  </Link>
                  <Link className=" text-sky-500 text-lg">
                    <BsTwitter />
                  </Link>
                  <Link className=" text-blue-700 text-lg">
                    <BiLogoLinkedin />
                  </Link>
                  <Link className=" text-blue-900 text-lg">
                    <BiLogoTumblr />
                  </Link>
                  <Link className=" text-red-700 text-lg">
                    <LiaPinterestP />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* divider */}
        <div className="divider divider-horizontal"></div>
        {/* divider */}
        <div className="lg:w-1/4 my-10">
          {/* popular posts */}
          <h1 className="text-xl font-semibold">Popular Posts</h1>
          <div className="flex flex-row pt-8">
            <img src={img} alt="" className="w-1/4 h-1/4" />
            <div className="pl-4">
              <Link className="text-sm">Helping Students Is the Key</Link>
            </div>
          </div>
          {/* popular posts */}
          {/* categories */}
          <div className=" mt-10">
            <h1 className="text-xl font-semibold">Categories</h1>
            <p className="pt-5">
              <Link>bussiness</Link>
            </p>
            <div className="divider mt-0"></div>
            <p>
              <Link>culture</Link>
            </p>
            <div className="divider mt-0"></div>
            <p>
              <Link>economy</Link>
            </p>
            <div className="divider mt-0"></div>
            <p>
              <Link>education</Link>
            </p>
            <div className="divider mt-0"></div>
            <p>
              <Link>motivation</Link>
            </p>
            <div className="divider mt-0"></div>
          </div>
          {/* categories */}
          {/* tags */}
          <div className="mt-10">
            <h1 className="text-xl font-semibold">Tags</h1>
            <div className="flex flex-wrap gap-5 pt-5"> 
              <p className="text-xs font-semibold"><Link>BIOLOGY</Link></p>
              <p className="text-xs font-semibold"><Link>BOOKS</Link></p>
              <p className="text-xs font-semibold"><Link>HISTORY</Link></p>
              <p className="text-xs font-semibold"><Link>LECTURE</Link></p>
              <p className="text-xs font-semibold"><Link>LIBRARY</Link></p>
              <p className="text-xs font-semibold"><Link>PHYSICS</Link></p>
              <p className="text-xs font-semibold"><Link>PRACTICE</Link></p>
              <p className="text-xs font-semibold"><Link>SCHOOL</Link></p>
            </div>
          </div>
          {/* tags */}
        </div>
      </div>
    </div>
  );
};

export default News;
