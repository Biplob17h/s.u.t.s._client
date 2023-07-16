import React from 'react';
import bannerBg from '../../../assets/About/breadcrumb-img-1.jpeg'
import { Link } from 'react-router-dom';
import '../About.css'

const Banner = () => {

    return (
        <div className=' bg-cover overflow-hidden h-56 bg-center relative' style={{backgroundImage:`url(${bannerBg})`
    }}>
        <div className=' flex w-full h-full items-center justify-center res-teacherdetailsbanner'>
            <h1 className='text-2xl'>Our Teachers</h1>
            <p><Link>Home</Link> / Our Teachers</p>
        </div>

        </div>
    );
};

export default Banner;