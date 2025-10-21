import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import IntroCard from '../IntroCard/IntroCard';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <IntroCard />
            <PopularMenu />
            <CallUs />
            <ChefRecommends />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;