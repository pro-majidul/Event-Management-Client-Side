import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import useAuth from '../hooks/useAuth';
const Navbar = () => {
    const { user, userLogOut } = useAuth();
    console.log(user, 'user is')
    const handelLogOut = async () => {
        await userLogOut()

    }
    return (
        <section className='bg-base-100 shadow-sm py-2'>
            <div className="navbar max-w-7xl mx-auto w-full md:px-12">
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
                                    className={({ isActive }) => isActive ? 'text-green-500 text-lg' : 'text-lg text-black'}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <Link to='/'>
                            <img className='md:w-14 w-6' src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? 'text-green-500 text-lg' : 'text-lg text-black'}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <ul>
                        {!user && <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => isActive ? 'text-green-500 text-lg' : 'text-lg text-black'}
                            >
                                Login
                            </NavLink>
                        </li>}
                        {user && <li>
                            <button
                                onClick={handelLogOut}
                                className='text-lg text-black hover:text-green-500'
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