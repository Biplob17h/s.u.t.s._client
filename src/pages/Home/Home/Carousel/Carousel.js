import React from 'react';
import img from '../../../../assets/carousel/front-university.jpg'
import logo from '../../../../assets/logo.png'
import './styles.css'
const Carousel = () => {
  return (    
      <header className=' bg-cover w-screen h-screen bg-center relative -z-10' style={{backgroundImage:`url(${img})`}}>
        <div className='w-full h-full flex flex-col text-white items-center justify-center bg-[rgba(0,0,0,0.5)]'>
        <img src={logo} alt="" className=''/>
        <h1 className=' text-6xl text-white'>Graduation Admission</h1>
        <p className='py-5'>The perfect way to create a stunning online presentation</p>
        <button className="btn glass rounded-none text-white hover:text-black text-xs">Read More</button>
        </div>
      </header>    
  );
};

export default Carousel;