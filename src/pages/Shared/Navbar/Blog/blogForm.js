import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
  const navigate = useNavigate();
  //All State
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  //create blog function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const blogData = new FormData();
      blogData.append("name", name);
      blogData.append("description", description);
      blogData.append("photo", photo);
      const { data } = axios.post(
        `https://suts-server-sable.vercel.app/api/v1/blog/blog-post`,
        blogData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong!");
    }
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form>
              <div className="card-body">
                <h1 className="text-5xl">Create Your Blog</h1>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Blog Title"
                  className="input shadow my-1"
                  required
                />

                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                ></textarea>

                <div className="my-1">
                  <label className="btn bnt-outline-secondary">
                    {photo ? photo.name : "Upload Photo"}
                    <input
                      type="file"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                      placeholder="img"
                      accept="image/*"
                      required
                    />
                  </label>
                </div>
                <div className="mb-3">
                  {photo && (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="blog-photo"
                        height={"200"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn bg-sky-400 mt-6"
                >
                  POST BLOG
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogForm;
