import React from 'react';

const MenuItem = ({ item }) => {
    const { name, price, image, recipe } = item;
    
    return (
        <div className='flex space-x-4'>
            <img className='w-[120px] h-[105px] rounded-br-full rounded-tr-full rounded-bl-full' src={image} alt="" />
            <div>
                <h2 className='uppercase text-lg'>{name}</h2>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-400 font-semibold'>${price}</p>
        </div>
    );
};

export default MenuItem;