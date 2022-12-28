import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';

const Navbar = () => {
    const menuItem = 
    <>
    <Link><li className='mr-5'>Home</li></Link>
    <Link><li className='mr-5'>Media</li></Link>
    <Link><li className='mr-5'>Message</li></Link>
    <Link><li className='mr-5'>About</li></Link>
    </>
    return (
        <div className="navbar bg-teal-500 text-white sticky">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-teal-500 text-white rounded-box w-52">
              {menuItem}
            </ul>
          </div>
          <Link className='text-xl font-bold flex items-center'><img src={logo} className='w-10 rounded-full mr-4' alt="" /> Social <span>Networks</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {menuItem}
          </ul>
        </div>
        <div className="navbar-end">
          <ul className='flex mr-8'>
          <Link><li className='mr-5'>Login</li></Link>
          <Link><li>Register</li></Link>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;