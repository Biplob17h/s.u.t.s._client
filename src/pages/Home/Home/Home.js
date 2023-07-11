import React from 'react';
import Carousel from './Carousel/Carousel';
import WelcomePart from '../WelcomePart/WelcomePart';
import Events from './Events/Events';
import Introduction from './Introduction/Introduction';
import Counts from './Counts/Counts';
import PopularCourses from './PopularCourses/PopularCourses';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <WelcomePart></WelcomePart>
            <Events></Events>
            <Introduction></Introduction>
            <Counts></Counts>
            <PopularCourses></PopularCourses>
        </div>
    );
};

export default Home;