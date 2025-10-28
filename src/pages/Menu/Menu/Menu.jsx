import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={'our menu'}
                description={'WOULD YOU LIKE TO TRY OUR DISH?'}
            />
            <SectionTitle subHeading={"Today's Offer"} heading={"Don't Miss"} />
            <MenuCategory items={offered} />
            <Cover
                img={dessertImg}
                title={'DESSERTS'}
                description={'A sweet indulgence to end the meal, a perfect final, delightful treat. From rich chocolate cakes to light, fruity sorbets, it satisfies every craving.'}
            />
            <MenuCategory items={desserts} />
            <Cover
                img={pizzaImg}
                title={'PIZZA'}
                description={'A beloved circle of dough, topped with savory sauce, melted cheese, and favorite things. From classic Margherita to loaded supreme, each slice is a taste of comfort.'}
            />
            <MenuCategory items={pizza} />
            <Cover
                img={saladImg}
                title={'salad'}
                description={"A crisp and vibrant mix of fresh greens, vegetables, and tantalizing dressings. It's a healthy start or a light meal, bursting with color and flavor."}
            />
            <MenuCategory items={salad} />
            <Cover
                img={soupImg}
                title={'soup'}
                description={'A warm, comforting bowl, simmering with rich broths and hearty ingredients. It soothes the soul on a cold day and nourishes with every spoonful.'}
            />
            <MenuCategory items={soup} />
        </div>
    );
};

export default Menu;