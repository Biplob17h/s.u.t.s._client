import React from 'react';
import bgImg from '../../../../assets/carousel/front-university.jpg'
import {PiGraduationCapBold,PiCertificateDuotone} from 'react-icons/pi'
import {BsCalendar3} from 'react-icons/bs'
import {FaComputer} from 'react-icons/fa6'
const Counts = () => {
    return (
        <div className=' bg-cover overflow-hidden lg:h-64 sm:w-screen sm:h-screen bg-center relative' style={{backgroundImage:`url(${bgImg})`
    }}>
            <div className='w-full h-full flex lg:flex-row sm:flex-col text-center lg:space-x-60 text-4xl text-white items-center justify-center bg-[rgba(0,0,0,0.5)] sm:space-y-20'> 
                <div className=''>
                <PiGraduationCapBold className='ml-9'/>
                <p className='sm:text-5xl sm:font-semibold'>13286</p>
                <p className=' text-base sm:text-lg sm:font-semibold'>Success Stories</p>
                </div>
                <div className=''>
                <PiCertificateDuotone className='ml-9'/>
                <p className='sm:text-5xl sm:font-semibold'>678</p>
                <p className=' text-base sm:text-lg sm:font-semibold'>Trusted Tutors</p>
                </div>
                <div className=''>
                <BsCalendar3 className='ml-11'/>
                <p className='sm:text-5xl sm:font-semibold'>347</p>
                <p className=' text-base sm:text-lg sm:font-semibold'>Scheduled Events</p>
                </div>
                <div className=''>
                <FaComputer className='ml-10'/>
                <p className='sm:text-5xl sm:font-semibold'>1912</p>
                <p className=' text-base sm:text-lg sm:font-semibold'>Available Courses</p>
                </div>
            </div>
        </div>
    );
};

export default Counts;