import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import logo from '../../images/logo.jpg';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login');
      })
      .catch(err => console.error(err))
  }
  return (
    <div className="navbar bg-teal-500 text-white sticky">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-teal-500 text-white rounded-box w-52">
            {
              user?.uid ?
                <>
                  <Link to='/'><li className='mr-5'>Media</li></Link>
                  <Link to='/message'><li className='mr-5'>Message</li></Link>
                  <Link to='/about'><li className='mr-5'>About</li></Link>
                </>
                :
                <>
                  <p className='text-lg font-thin'>Please Login Or Signup</p>
                </>
            }
          </ul>
        </div>
        <p className='text-xl font-bold flex items-center'><img src={logo} className='w-10 rounded-full mr-4' alt="" /> Social <span>Networks</span></p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            user?.uid ?
              <>
                <Link to='/'><li className='mr-5'>Media</li></Link>
                <Link to='/message'><li className='mr-5'>Message</li></Link>
                <Link to='/about'><li className='mr-5'>About</li></Link>
              </>
              :
              <>
                <p className='text-lg font-thin'>Please Login Or Signup</p>
              </>
          }
        </ul>
      </div>
      <div className="navbar-end">
        <ul className='flex lg:mr-8'>
          {
            user?.uid ?
              <>
                <li className='mr-2'><img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" /></li>
                <button onClick={handelLogOut} className="btn m-0 bg-gradient-to-r from-teal-700 to-teal-400">LogOut</button>

                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

              </>
              :
              <>
                <Link to='/login'><li className='mr-5'>Login</li></Link>
                <Link to='/signup'><li>Signup</li></Link>
              </>
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;