import React from 'react';
import ResumeButton from './Button/ResumeBtn';

const Navbar = () => {
    const links = <>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skill</a></li>
        <li><a href="#client">Client</a></li>
        <li><a href="#contact">Contact</a></li>
    </>
    return (
        <div className='  shadow-sm'>

            <div className=" navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold">DM YOUNUS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 text-xl">
                        {links  }
                    </ul>
                </div>
                <div className="navbar-end">
                    <ResumeButton/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;