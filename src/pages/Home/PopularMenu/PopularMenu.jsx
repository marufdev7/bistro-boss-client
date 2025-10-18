import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
        })
    }, [])
    return (
        <section className='mb-10'>
            <SectionTitle
                heading="From Our Menu"
                subHeading="Check it Out"
            />
            <div className='grid md:grid-cols-2 gap-6 pl-5 pr-5'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
        </section>
    );
};

export default PopularMenu;