import React, { useEffect, useState } from "react";
import signature from "../../../assets/about/signature-1.png";
import teacherImg from "../../../assets/about/teachers-1.jpeg";
import "../About.css";
import { Link } from "react-router-dom";
import TeacherDetailsSingle from "../TeacherDetails/TeacherDetailsSingle";
const Teachers = () => {
  const [teachersInfo, setTeachersInfo] = useState([]);

  useEffect(() => {
    fetch("teachers.json")
      .then((res) => res.json())
      .then((data) => setTeachersInfo(data));
  }, []);
  return (
    <div className="mt-20">
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
          <TeacherDetailsSingle
          key={teachers.id}
          teachers={teachers}
          ></TeacherDetailsSingle>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
