import React from "react";
import { Link} from "react-router-dom";
import { ScrollToTop } from "../../components/ScrollToTop";


const TeacherDetailsSingle = ({ teachers }) => {

  // function
  const handleSingleTeacher = () => {
    ScrollToTop()
    localStorage.removeItem("teacher");
    const teacher = JSON.stringify(teachers);
    localStorage.setItem("teacher", teacher);
  };
  return (
    <div className="text-center flex flex-col items-center justify-center pt-4">
      <Link onClick={handleSingleTeacher} to={`/about/teachers/${teachers.id}`}>
        <img src={teachers.image} alt="" />
        <h1 className="text-2xl py-3">{teachers.name}</h1>
        <p className=" text-base">{teachers.specialty}</p>
      </Link>
    </div>
  );
};

export default TeacherDetailsSingle;
