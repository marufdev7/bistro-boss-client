import React from 'react';
import orderCover from '../../../assets/shop/order.jpg'
import Cover from '../../shared/Cover/Cover';

const Order = () => {
    return (
        <div>
            <Cover img={orderCover} title={"Order Food"} />
        </div>
    );
};

export default Order;