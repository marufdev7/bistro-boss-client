import React from 'react';
import img1 from '../../../assets/home/chef-service.jpg'

const IntroCard = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
            style={{ backgroundImage: `url(${img1})` }}
        >
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl text-center max-w-2xl">
                <h2 className="text-4xl font-serif font-thin text-gray-800 drop-shadow-xl">
                    Bistro Boss
                </h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                    At Bistro Boss, we bring together fresh ingredients, authentic recipes, and a touch of creativity to serve dishes that delight every palate.Where fine dining meets comfort. Bistro Boss offers a curated menu of seasonal flavors, crafted with passion and served with care.
                </p>
            </div>
        </div>
    );
};

export default IntroCard;