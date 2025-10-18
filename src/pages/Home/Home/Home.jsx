import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import IntroCard from '../IntroCard/IntroCard';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <IntroCard />
            <PopularMenu />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;