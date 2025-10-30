import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the Menu"
            strength={-200}
        >
            <div className="hero md:h-[600px]">
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="backdrop-blur-sm shadow-xl md:min-w-[700px] bg-black/30 rounded-2xl pt-20 pb-20 pl-10 pr-10 ">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{description}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;