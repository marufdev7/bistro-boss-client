import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.png'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} />
        </div>
    );
};

export default Menu;