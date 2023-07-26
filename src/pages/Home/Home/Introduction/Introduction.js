import React, { useState } from 'react';
import {PiGraduationCap} from 'react-icons/pi'
import {BsPeople} from 'react-icons/bs'
import {GoBookmark} from 'react-icons/go'
import img from '../../../../assets/Screenshot 2023-07-11 155853.png'



const Introduction = () => {


    const [text, setText] = useState('Mauris et diam pellentesque ex fermentum consectetur. Curabitur non tortor sit amet ligula viverra commodo. Quisque luctus nunc dolor, nec porttitor diam accumsan et. Duis convallis ipsum eget ligula scelerisque, eget consectetur mi interdum. Nullam tempor arcu consectetur pellentesque ultrices. Phasellus eu ipsum felis')
    const discription =()=>{
        const dis = 'Mauris et diam pellentesque ex fermentum consectetur. Curabitur non tortor sit amet ligula viverra commodo. Quisque luctus nunc dolor, nec porttitor diam accumsan et. Duis convallis ipsum eget ligula scelerisque, eget consectetur mi interdum. Nullam tempor arcu consectetur pellentesque ultrices. Phasellus eu ipsum felis'
        setText(dis)
    }
    const syllabus =()=>{
        const syl ='Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.'   
        setText(syl)     
    }
    const teachers = ()=>{
        const tea = 'Sed nec vehicula mi. Pellentesque at nisl odio. Sed tempus erat nec massa vehicula pretium eget porta tellus. Donec fermentum massa turpis, vel pretium erat mattis sit amet. Mauris sit amet dolor mi. Integer ligula ante, malesuada sed malesuada id, tempor nec nulla. Curabitur consectetur, eros et dapibus commodo, mauris sapien facilisis dui, dapibus'
        setText(tea)
    }

    return (
        <div className='flex py-20 bg-gray-100 lg:flex-row sm:flex-col-reverse'>
            <div className='lg:w-1/2 sm:w-full'>
            <div className=' flex flex-row justify-center'>
                <button onClick={discription} className='flex items-center btn bg-gray-200  rounded-none border border-gray-400'><PiGraduationCap/>Description</button>
                <button onClick={syllabus} className='flex items-center bg-gray-200 btn rounded-none border border-gray-400'><GoBookmark/>Syllabus</button>
                <button onClick={teachers}className='flex items-center bg-gray-200 btn rounded-none border border-gray-400'><BsPeople/>Teachers</button>
            </div>
            <p className='lg:mx-10 sm:mx-10 mt-3 slow'>{text}</p>
            </div>
            <img src={img} alt="" className='lg:w-1/2 sm:w-full'/>
        </div>
    );
};

export default Introduction;