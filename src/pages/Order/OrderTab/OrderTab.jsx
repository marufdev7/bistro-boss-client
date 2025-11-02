import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './OrderTab.css';

const chunk = (arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
};

const OrderTab = ({ items }) => {
    const pages = chunk(items, 6);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' custom-bullet">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper custom-swiper"
            >
                {
                    pages.map((page, i) => (
                        <SwiperSlide key={i}>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 place-items-center">
                                {page.map(item => <FoodCard key={item._id} item={item} />)}
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default OrderTab;