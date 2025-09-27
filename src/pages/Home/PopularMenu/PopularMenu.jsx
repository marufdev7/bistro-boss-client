import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

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
        <section className='mt-10'>
            <SectionTitle
                heading="From Our Menu"
                subHeading="Check it Out"
            />
            <div>
                {
                    menu.map(item => {})
                }
            </div>
        </section>
    );
};

export default PopularMenu;