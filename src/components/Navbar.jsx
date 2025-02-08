import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import useAuth from '../hooks/useAuth';
const Navbar = () => {
    const { user, userLogOut, isGuest, setIsGuest } = useAuth();

    const navigate = useNavigate()
    console.log(user, 'user is')
    useEffect(() => {
        const guestToken = localStorage.getItem('guestToken');
        setIsGuest(!!guestToken);
    }, [])

    const handelLogOut = async () => {
        await userLogOut()
        localStorage.removeItem('guestToken');
        setIsGuest(false);
        navigate('/login')
    }
    return (
        <section className=' bg-base-100 fixed top-0 w-full z-50 shadow-sm py-2'>
            <div className="navbar max-w-7xl  mx-auto w-full md:px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'text-green-500 text-lg' : 'text-lg text-white'}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            {user || isGuest && <li>
                                <NavLink
                                    to='/create'
                                    className={({ isActive }) => isActive ? 'text-green-500 text-lg' : 'text-lg text-white'}
                                >
                                    Create Event
                                </NavLink>
                            </li>}
                            {user || isGuest && <li>
                                <NavLink
                                    to='/my-events'
                                    className={({ isActive }) => isActive ? 'text-green-500 text-lg' : 'text-lg text-white'}
                                >
                                    My Events
                                </NavLink>
                            </li>}

                        </ul>
                    </div>
                    <div>
                        <Link to='/'>
                            <img className='md:w-14 w-12' src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? 'text-green-500 text-lg' : 'text-lg text-white'}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        {user || isGuest && <li>
                            <NavLink
                                to='/create'
                                className={({ isActive }) => isActive ? 'text-green-500 text-lg' : 'text-lg text-white'}
                            >
                                Create Event
                            </NavLink>
                        </li>}
                        {user || isGuest && <li>
                            <NavLink
                                to='/my-events'
                                className={({ isActive }) => isActive ? 'text-green-500 text-lg' : 'text-lg text-white'}
                            >
                                My Events
                            </NavLink>
                        </li>}

                    </ul>
                </div>
                <div className="navbar-end">
                    <ul>
                        {!user && !isGuest && <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => isActive ? 'text-green-500 text-lg' : 'text-lg text-white'}
                            >
                                Login
                            </NavLink>
                        </li>}
                        {(user || isGuest) && <li>
                            <button
                                onClick={handelLogOut}
                                className='text-lg text-white hover:text-green-500'
                            >
                                Logout
                            </button></li>}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navbar;