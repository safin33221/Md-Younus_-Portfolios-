import React from 'react';
import ResumeButton from './Button/ResumeBtn';
import { Link } from 'react-scroll';
import { footerLinks } from '../constants';

const Navbar = () => {

    return (


        <div className=" navbar container mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {footerLinks.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-120}
                                        to={item.section}
                                        className="hover:text-white transition-all duration-500 cursor-pointer"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">DM YOUNUS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-2 text-xl">
                    {footerLinks.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-120}
                                    to={item.section}
                                    className="hover:text-white transition-all duration-500 cursor-pointer"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="navbar-end">
                <ResumeButton />
            </div>
        </div>

    );
};

export default Navbar;