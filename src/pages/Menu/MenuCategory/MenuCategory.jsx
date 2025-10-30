import React from 'react';
import MenuItem from '../../shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='grid md:grid-cols-2 gap-6 pl-5 pr-5 my-16'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <Link to={`/order/${title}`}><button className='btn btn-outline text-yellow-600 border-0 uppercase border-b-4 w-72 mb-8'>ORDER YOUR FAVOURITE FOOD</button></Link>
        </div>
    );
};

export default MenuCategory;