import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div
            className="text-white bg-fixed featured-section"
        >
            <SectionTitle subHeading="From Our Menu" heading="Check it Out" />
            <div>
                <div className='md:flex justify-center items-center pb-20 pt-7 px-32'>
                    <div>
                        <img src={featured} alt="" />
                    </div>
                    <div className='md:ml-10 space-y-3 '>
                        <p>Sep 29, 2026</p>
                        <p className='uppercase'>Where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut recusandae aut quae eveniet. Pariatur ab doloribus assumenda aperiam porro, quos explicabo, laboriosam possimus recusandae vero laudantium alias quibusdam velit veritatis. Totam impedit, numquam quis alias qui a tenetur aliquam quidem maiores, suscipit aut excepturi illum ipsam official velit maxime.</p>
                        <button className='btn btn-outline text-white border-0 border-b-4'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;