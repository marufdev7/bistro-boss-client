import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import IntroCard from '../IntroCard/IntroCard';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <IntroCard />
            <PopularMenu />
        </div>
    );
};

export default Home;