import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const TeacherDetailsCarousel = () => {
  const [teacherCarousel, setTeacherCarousel] = useState([]);
  useEffect(() => {
    fetch("teachers.json")
      .then((res) => res.json())
      .then((data) => setTeacherCarousel(data));
  }, []);
  return (
    <Swiper slidesPerView={8} spaceBetween={0} className="mySwiper">
      {teacherCarousel.map((teacherImg) => (
        <SwiperSlide className="parent">
          <img src={teacherImg.image} alt="" className="child" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeacherDetailsCarousel;
