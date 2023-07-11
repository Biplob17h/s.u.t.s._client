import React from 'react';
import bgImg from '../../../../assets/carousel/front-university.jpg'
import {PiGraduationCapBold,PiCertificateDuotone} from 'react-icons/pi'
import {BsCalendar3} from 'react-icons/bs'
import {FaComputer} from 'react-icons/fa6'
const Counts = () => {
    return (
        <div className=' bg-cover overflow-hidden h-64 bg-center relative' style={{backgroundImage:`url(${bgImg})`
    }}>
            <div className='w-full h-full flex lg:flex-row md:flex-row text-center sm:flex-col space-x-60 text-4xl text-white items-center justify-center bg-[rgba(0,0,0,0.5)]'> 
                <div className=''>
                <PiGraduationCapBold className='ml-9'/>
                <p>13286</p>
                <p className=' text-base'>Success Stories</p>
                </div>
                <div className=''>
                <PiCertificateDuotone className='ml-9'/>
                <p>678</p>
                <p className=' text-base'>Trusted Tutors</p>
                </div>
                <div className=''>
                <BsCalendar3 className='ml-11'/>
                <p>347</p>
                <p className=' text-base'>Scheduled Events</p>
                </div>
                <div className=''>
                <FaComputer className='ml-10'/>
                <p>1912</p>
                <p className=' text-base'>Available Courses</p>
                </div>
            </div>
        </div>
    );
};

export default Counts;