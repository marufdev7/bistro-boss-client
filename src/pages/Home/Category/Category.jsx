import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import '../../../styles.css';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';


const Category = () => {
    return (
        <div className='mt-10 mb-16'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='flex flex-col'>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl uppercase text-center text-gray-200 -mt-12'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col'>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl uppercase text-center text-gray-200 -mt-12'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col'>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl uppercase text-center text-gray-200 -mt-12'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col'>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl uppercase text-center text-gray-200 -mt-12'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col'>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl uppercase text-center text-gray-200 -mt-12'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;