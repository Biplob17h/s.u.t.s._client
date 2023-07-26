import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TeacherDetailsSingle = ({ teachers }) => {
  const navigate = useNavigate();
  const teachersId = (id) => {
    navigate("/about/teachers", { state: { id: id } });
  };
  return (
    <div className="text-center flex flex-col items-center justify-center pt-4">
      <Link onClick={() => teachersId(teachers.id)}>        
        <img src={teachers.image} alt="" />
        <h1 className="text-2xl py-3">{teachers.name}</h1>
        <p className=" text-base">{teachers.specialty}</p>
      </Link>
    </div>
  );
};

export default TeacherDetailsSingle;
