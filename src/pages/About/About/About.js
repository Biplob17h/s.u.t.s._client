import React, { useEffect, useState } from "react";
import signature from "../../../assets/about/signature-1.png";
import teacherImg from "../../../assets/about/teachers-1.jpeg";
import "../About.css";
import { Link } from "react-router-dom";
const Teachers = () => {
  const [teachersInfo, setTeachersInfo] = useState([]);

  useEffect(() => {
    fetch("teachers.json")
      .then((res) => res.json())
      .then((data) => setTeachersInfo(data));
  }, []);
  return (
    <div>
      <div className="flex res-teacher">
        <img src={teacherImg} alt="" className="" />
        <div className="pt-8  res-signature">
          <h1 className="text-4xl font-bold">Joseph White</h1>
          <p className="text-lg py-5">
            Exerci deserunt ei qui, nec ceteros quaerendum et, appareat
            abhorreant no. Mel minim novum invenire no
          </p>
          <p>
            Ad est fugit senserit contentiones. Sumo apeirian his at, ei nam
            mucius possim accusam. Duo minim dicit contentiones cu, dolor soluta
            ne nec, id nisl augue eos. Ad corpora partiendo sea, id ipsum omnium
            disputationi pri, eum eu ipsum placerat. Mel et gloriatur temporibus
          </p>
          <img src={signature} alt="" className="pt-5" />
        </div>
      </div>
      <div className=" grid my-16 res-teacher-card">

          {teachersInfo.map((teachers) => (
            <div className="text-center flex flex-col items-center justify-center pt-4"><Link to='/teacherdetails'>
              <img src={teachers.image} alt="" />
              <h1 className="text-2xl py-3">{teachers.name}</h1>
              <p className=" text-base">{teachers.specialty}</p>
              </Link>
            </div>
          ))}

      </div>
    </div>
  );
};

export default Teachers;