import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import NavBar from '../pages/shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();
    console.log(location);
    const isLoginPage = location.pathname.includes('login');
    return (
        <div>
            { isLoginPage || <NavBar/>}
            <Outlet />
            {isLoginPage || <Footer/>}
        </div>
    );
};

export default Main;