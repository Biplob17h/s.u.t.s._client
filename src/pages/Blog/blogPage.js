import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  //get all blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/blog/get-blog`
      );
      setBlogs(data.blogs);
    } catch (error) {
      console.log(error);
      toast.error("Somthing Went Wrong");
    }
  };
  //use Effect
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <>
      <div className="blog mt-20">
        <div className="container">
          <div className="row flex gap-2">
            <div className="col-md-9 ">
              {blogs?.map((p) => (
                <div className=" w-full bg-base-100 shadow-xl">
                  <figure>
                    <img
                      className=""
                      width="1000"
                      height="530"
                      src={`http://localhost:8080/api/v1/blog/blog-photo/${p._id}`}
                      alt="book"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-semibold text-4xl">
                      {p.name}
                    </h2>
                    <p>July 11,2023</p>

                    <div className="public-section flex">
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </a>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                          />
                        </svg>
                      </a>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 6h.008v.008H6V6z"
                          />
                        </svg>
                      </a>
                    </div>
                    <p>{p.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-3 w-full">
              <div className="popular-post">
                <h1 className="text-xl font-bold">Popular Posts</h1>
                <div className="div flex gap-1 mt-3">
                  <img
                    width="100"
                    height="90"
                    src="https://i.postimg.cc/3w0L3MMG/blog-featured-13.jpg"
                    alt=""
                  />
                  <div className="h3">Experiences Through Education</div>
                </div>
              </div>
              <div className="user-post mt-20 border-red-400 rounded">
                <div className="text-xl font-semibold py-3">
                  Publish your passions, your way
                </div>
                <div className="text-lg py-2">
                  Create a unique and beautiful blog easily.
                </div>
                <div>
                  <Link to="/blog-form">
                    <button className="btn  btn-warning mt-3">
                      CREATE YOUR BLOG
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
