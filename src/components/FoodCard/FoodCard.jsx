import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="card bg-base-300 hover:bg-base-200 transition-colors duration-[300ms] h-[550px] mb-5 shadow-xl p-4">
            <img
                src={image}
                alt="Caesar Salad"
                className='rounded-md'
            />
            <p className='font-bold text-white bg-black/80 p-2 rounded absolute right-6 top-6'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className='btn btn-outline text-yellow-600 border-0 bg-black/10 uppercase border-b-4'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;