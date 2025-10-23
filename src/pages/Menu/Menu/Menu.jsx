import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessert from '../../../assets/menu/dessert-bg.jpeg';
import pizza from '../../../assets/menu/pizza-bg.jpg';
import salad from '../../../assets/menu/salad-bg.jpg';
import soup from '../../../assets/menu/soup-bg.jpg';

import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
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
            <PopularMenu />
            <Cover
                img={dessert}
                title={'DESSERTS'}
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quam dolorem eveniet sint unde ipsum in commodi mollitia minus cupiditate!'}
            />
            <PopularMenu />
            <Cover
                img={pizza}
                title={'PIZZA'}
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quam dolorem eveniet sint unde ipsum in commodi mollitia minus cupiditate!'}
            />
            <PopularMenu />
            <Cover
                img={salad}
                title={'salad'}
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quam dolorem eveniet sint unde ipsum in commodi mollitia minus cupiditate!'}
            />
            <PopularMenu />
            <Cover
                img={soup}
                title={'soup'}
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quam dolorem eveniet sint unde ipsum in commodi mollitia minus cupiditate!'}
            />
            <PopularMenu />
        </div>
    );
};

export default Menu;