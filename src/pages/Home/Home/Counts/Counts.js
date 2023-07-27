import React from 'react';
import bgImg from '../../../../assets/carousel/front-university.jpg'
import {PiGraduationCapBold,PiCertificateDuotone} from 'react-icons/pi'
import {BsCalendar3} from 'react-icons/bs'
import {FaComputer} from 'react-icons/fa6'
const Counts = () => {
    return (
      <div
        className=" bg-cover overflow-hidden lg:h-64 sm:w-screen sm:h-screen bg-center relative"
        style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="w-[1280px] h-full flex  sm:flex-col text-center text-4xl text-white items-center justify-around bg-[rgba(0,0,0,0.5)] lg:flex-row lg:px-10">
          <div className="mt-5">
            <PiGraduationCapBold className="ml-9 text-5xl" />
            <p className="sm:text-5xl sm:font-semibold">13286</p>
            <p className=" text-base sm:text-lg sm:font-semibold">
              Success Stories
            </p>
          </div>
          <div className="">
            <PiCertificateDuotone className="ml-9 text-5xl" />
            <p className="sm:text-5xl sm:font-semibold">678</p>
            <p className=" text-base sm:text-lg sm:font-semibold">
              Trusted Tutors
            </p>
          </div>
          <div className="">
            <BsCalendar3 className="ml-9 text-5xl" />
            <p className="sm:text-5xl sm:font-semibold">300+</p>
            <p className=" text-base sm:text-lg sm:font-semibold">
              Scheduled Events
            </p>
          </div>
          <div className="">
            <FaComputer className="ml-9 text-5xl" />
            <p className="sm:text-5xl sm:font-semibold">60+</p>
            <p className=" text-base sm:text-lg sm:font-semibold">
              Available Courses
            </p>
          </div>
        </div>
      </div>
    );
};

export default Counts;