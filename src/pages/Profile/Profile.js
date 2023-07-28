import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contextApi/UserContext";
import profileImg from "../../assets/icons/profile.png";
import { Link } from "react-router-dom";

const Profile = () => {
  // context api
  const { user } = useContext(AuthContext);

  //   all state
  const [data, setData] = useState({});
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  // use Effect
  useEffect(() => {
    setLoading(true);
    fetch(`https://suts-server-sable.vercel.app/api/v1/study?email=${user}`)
      .then((res) => res.json())
      .then((data) => {
        let newData = [];
        data.forEach((s) => {
          const newArray = s?.studies;
          newData = [...newData, ...newArray];
        });
        setStudies(newData);
      });
    setLoading(false);
  }, [user]);
  console.log(studies);
  //   function
  const test = () => {
    console.log("clicked");

    console.log(user);
  };
  return (
    <div className="md:flex mt-10">
      <div className="md:w-5/12 ">
        <h1 className="text-center font-bold text-4xl">Currently Studing</h1>
        <div>
          {loading ? (
            <>
              <h1 className="text-xl">Loading...</h1>
            </>
          ) : (
            <div className="mx-5">
              {studies.length > 0 ? (
                <>
                  {studies.map((study) => (
                    <div
                      className="mt-5 flex font-semibold justify-between "
                      key={study._id}>
                      <img className="w-20" src={study.course.img} alt="" />
                      <div>
                        <h1 className="text-[18px]">
                          {study?.course?.name}
                        </h1>
                        <h1>Length : {study.course.course_length} months</h1>
                      </div>
                      <div>
                        <h1>Week : {study.course.in_week} Class</h1>
                        <h1>Toatal Tests : {study.course.test} </h1>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <h1 className="text-xl mt-5 text-center font-semibold">
                    Currently not Studying
                  </h1>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="mt-16 md:mt-0 md:w-7/12 md:border-l-2 md:h-[500px] ">
        <img className="w-[200px] mx-auto" src={profileImg} alt="" />
        <div className="mx-10 md:mx-20 mt-10">
          <h1 className="font-bold text-3xl">Name : userName</h1>
          <h1 className="text-xl font-semibold">Email : {user}</h1>
          <h1 className="text-xl font-semibold">
            currently studying : {studies.length} courses
          </h1>
        </div>
        <div className="mt-20 ml-20">
          <Link 
          to='/'
            className="mt-20 text-[18px] font-semibold cusOpenSans text-white  bg-[#2d76b2] text-center p-5 cursor-pointer h-[50px] w-[190px] hover:bg-[#434343]">
            GO TO HOME
          </Link>
        </div>
        <div className="opacity-70 text-center mt-20 text-[17px]">
          <h1>
            this page is not complete. stay tuned for more details coming soon
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
