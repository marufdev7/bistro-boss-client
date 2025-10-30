import React from 'react';

const OrderTab = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
            {
                salad.map(item =>
                    <FoodCard
                        key={item._id}
                        item={item}
                    />)
            }
        </div>
    );
};

export default OrderTab;