import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import IntroCard from '../IntroCard/IntroCard';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import CallUs from '../CallUs/CallUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <IntroCard />
            <PopularMenu />
            <CallUs />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;