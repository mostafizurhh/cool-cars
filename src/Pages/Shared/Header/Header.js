import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa'

const Header = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/orders'>Orders</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-24 mt-4 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu font-semibold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        <div className='xs:block sm:hidden mb-2'>
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-xs indicator-item"></span>
                                </div>
                            </label>
                        </div>
                        <Link to='/appoinment' className="btn btn-xs xs:block sm:hidden">Appoinment</Link>
                    </ul>
                </div>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu font-semibold menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='hidden sm:block mr-2'>
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-xs indicator-item"></span>
                        </div>
                    </label>
                </div>
                <Link to='/appoinment' className="btn btn-xs hidden sm:block">Appoinment</Link>

                {/*---------------------
                 display user info 
                 ---------------------*/}
                <div className='flex items-center justify-center ml-3'>
                    {/*-------------------------------
                    diplay user photo and show name as tooltip 
                    ---------------------------------*/}
                    <div className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                        {
                            user?.photoURL ?
                                <div className="w-16 rounded-full">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                                :
                                <FaUser></FaUser>
                        }
                    </div>
                    {/*------------------------------------ toggle between login and logout link 
                    --------------------------------------*/}
                    <div>
                        {
                            user?.uid ?
                                <>
                                    <button onClick={handleLogout} className='ml-2'>Logout</button>
                                </>
                                :
                                <>
                                    <Link to='/login' className='ml-2'>Login</Link>
                                    <Link to='/register' className='ml-2'>Register</Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;