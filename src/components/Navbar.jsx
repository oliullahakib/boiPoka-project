import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContex';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/listedBooks'}>Listed Books</NavLink>
        <NavLink to={'/pages'}>Pages to Read</NavLink>
        {user&& <NavLink to={"/profile"}>Profile</NavLink>}
        </>

    const handleLogOut = () => {
        logOut()
            .then(console.log("logOut"))
    }
    return (
        <div className="navbar bg-base-100  w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3">
                        {
                            links
                        }
                        <a className="btn btn-success text-white my-3">Sing In</a>
                        <a className="btn btn-info text-white">Sing Up</a>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-5 px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end hidden md:flex md:flex-row gap-2 md:gap-5">
                {
                    user ? <button onClick={handleLogOut} className='btn btn-warning'>Log Out</button> : <>
                        <Link to={"/signIn"} className="btn btn-success text-white">Sign In</Link>
                        <Link to={"/signUp"} className="btn btn-info text-white">Sign Up</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;