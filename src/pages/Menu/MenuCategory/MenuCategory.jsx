import React from 'react';
import MenuItem from '../../shared/MenuItem/MenuItem';

const MenuCategory = ({items}) => {
    return (
        <div className='grid md:grid-cols-2 gap-6 pl-5 pr-5 my-16'>
            {
                items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                />)
            }
        </div>
    );
};

export default MenuCategory;