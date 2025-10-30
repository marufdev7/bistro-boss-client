import React from 'react';

const FoodCard = ({ item }) => {
    const { name, img, price, recipe } = item;

    return (
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
                    <button className='btn btn-outline text-yellow-600 border-0 uppercase border-b-4'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;