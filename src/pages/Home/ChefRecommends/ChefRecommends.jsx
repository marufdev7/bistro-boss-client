import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img from '../../../assets/home/slide1.jpg'

const ChefRecommends = () => {
    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading={"chef recommends"}
                heading={'Should Try'}
            />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center'>
                <div className="card bg-base-300 hover:bg-base-200 transition-colors duration-[300ms] mb-5 shadow-xl p-4">
                    <img
                        src={img}
                        alt="Caesar Salad"
                        className='rounded-md'
                    />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caesar Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className='btn btn-outline text-yellow-600 border-0 bg-black/10 uppercase border-b-4'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-300 hover:bg-base-200 transition-colors duration-[300ms] mb-5 shadow-xl p-4">
                    <img
                        src={img}
                        alt="Caesar Salad"
                        className='rounded-md'
                    />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caesar Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className='btn btn-outline text-yellow-600 border-0 bg-black/10 uppercase border-b-4'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-300 hover:bg-base-200 transition-colors duration-[300ms] mb-5 shadow-xl p-4">
                    <img
                        src={img}
                        alt="Caesar Salad"
                        className='rounded-md'
                    />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caesar Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className='btn btn-outline text-yellow-600 border-0 bg-black/10 uppercase border-b-4'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;