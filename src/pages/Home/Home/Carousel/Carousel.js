import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo from "../../../../assets/logo/logo.png";

const Carousel = () => {
  const [carousels, setCarousels] = useState([]);

  useEffect(() => {
    fetch("carousel.json")
      .then((res) => res.json())
      .then((data) => setCarousels(data));
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };
  return (
    <div className="h-[100vh]">
      <Slider {...settings}>
        <div className="relative block text-white cusCarouselMotion">
          <img
            className="absolute top-[24%] left-[100px] md:left-[42%]"
            src={logo}
            alt=""
          />
          <h1 className="absolute top-[50%] left-[17%]  font-bold text-[27px] md:text-[60px]">
            Wellcome To Your Dream Path
          </h1>
          <h1 className="text-white top-[64%] left-2 absolute text-[18px]  md:only:text-[24px] md:font-semibold md:left-[28%]">
            Stanford University of Technology and Science
          </h1>
          <img
            className="w-full h-[100vh] "
            src="https://i.postimg.cc/HLmv575Q/h3-slide-1.jpg"
            alt=""
          />
        </div>
        <div className="relative block text-white cusCarouselMotion">
          <img
            className="absolute top-[24%] left-[100px] md:left-[42%]"
            src={logo}
            alt=""
          />
          <h1 className="absolute top-[50%] left-[17%]  font-bold text-[27px] md:text-[60px]">
            A Unique Experience
          </h1>
          <h1 className="text-white top-[58%] left-[66px] absolute text-[18px]  md:only:text-[24px] md:font-semibold md:left-[28%]">
            Enjoy Every Moment In Your Life
          </h1>
          <img
            className="w-full h-[100vh] "
            src="https://i.postimg.cc/Z5N7QL4k/h3-slide-2.jpg"
            alt=""
          />
        </div>
        <div className="relative block text-white cusCarouselMotion">
          <img className="absolute top-[24%] left-[42%]" src={logo} alt="" />
          <h1 className="absolute top-[50%] left-[17%]  font-bold text-[27px] md:text-[60px]">
            Advanced Teaching Method
          </h1>
          <h1 className="text-white top-[64%] left-[30px] absolute text-[18px]  md:only:text-[24px] md:font-semibold md:left-[28%]">
            Learn from the best with best equipment
          </h1>
          <img
            className="w-full h-[100vh] "
            src="https://i.postimg.cc/DfGz2BLj/Classroom.jpg"
            alt=""
          />
        </div>
        <div className="relative block text-white cusCarouselMotion">
          <img className="absolute top-[24%] left-[42%]" src={logo} alt="" />
          <h1 className="absolute top-[50%] left-[17%]  font-bold text-[27px] md:text-[60px]">
            Build Career In Sports
          </h1>
          <h1 className="text-white top-[58%] left-[85px] absolute text-[18px]  md:only:text-[24px] md:font-semibold md:left-[28%]">
            Make your career in sports
          </h1>
          <img
            className="w-full h-[100vh] "
            src="https://www.sport.ox.ac.uk/sites/default/files/styles/listing_tile_text_rollover_image/public/sport/images/media/lacrosse_2.jpg?itok=Q9b4OISw"
            alt=""
          />
        </div>
        <div className="relative block text-white cusCarouselMotion">
          <img className="absolute top-[24%] left-[42%]" src={logo} alt="" />
          <h1 className="absolute top-[50%] left-[17%]  font-bold text-[27px] md:text-[60px]">
            Premium Scholarship
          </h1>
          <h1 className="text-white top-[58%] left-12 absolute text-[18px]  md:only:text-[24px] md:font-semibold md:left-[28%]">
            Prepare for your Advanced Studies in scholarship
          </h1>
          <img
            className="w-full h-[100vh] "
            src="https://i.postimg.cc/YCX6bGmc/h3-slide-5.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
