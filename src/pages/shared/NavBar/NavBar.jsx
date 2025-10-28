import React from 'react';
import { FaUser } from 'react-icons/fa6';
import { RiMenu2Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const NavBarLinks = <>
        <li><NavLink to='/' className='hover:text-yellow-400'>Home</NavLink></li>
        <li><NavLink to='/dashboard' className='hover:text-yellow-400'>Dashboard</NavLink></li>
        <li><NavLink to='/menu' className='hover:text-yellow-400'>Our Menu</NavLink></li>
        <li><NavLink to='/order' className='hover:text-yellow-400'>Order Food</NavLink></li>
        <li><NavLink to='/contact-us' className='hover:text-yellow-400'>Contact Us</NavLink></li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 max-w-screen-2xl pl-4 pr-4 bg-opacity-15 bg-gray-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <RiMenu2Fill className='text-white' />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-transparent rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
                            {NavBarLinks}
                        </ul>
                    </div>
                    <div className="text-white">
                        <h1 className="text-xl font-bold tracking-wider">BISTRO BOSS</h1>
                        <p className="text-xs tracking-[0.3em] -mt-1">RESTAURANT</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white font-semibold ">
                        {NavBarLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button
                        className="flex items-center gap-2 text-white hover:text-yellow-400 hover:bg-gray-700 px-3 py-2 text-base font-medium transition-colors duration-200 tracking-wide rounded-lg"
                    >
                        <FaUser size={18} />
                        SIGN OUT
                    </button>
                </div>
            </div>
        </>
    );
};

export default NavBar;