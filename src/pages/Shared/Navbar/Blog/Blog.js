import React from 'react';
import bgImg from '../../assets/blog/title-area-parallax-1.jpeg'
import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <div className=' bg-cover overflow-hidden h-56 bg-center relative' style={{backgroundImage:`url(${bgImg})`
    }}>
        <div className=' flex w-full h-full items-center justify-center res-teacherdetailsbanner'>
            <h1 className='text-2xl'>Our Teachers</h1>
            <p><Link>Home</Link> / Our Teachers</p>
        </div>
            
        </div>
    );
};

export default Blog;