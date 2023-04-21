import React from 'react';
import { BiUser } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { BsCart3, BsCart2 } from 'react-icons/bs';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function NavBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const cookieValue = Cookies.get('token');
    if (cookieValue) {
      return setUser(cookieValue);
    }
  }, []);

  console.log(user);

  return (
    <div className='navbar bg-base-100'>
      {/* START */}
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <CgMenuLeftAlt className='text-2xl' />
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <a>MEN</a>
            </li>
            <li>
              <a>WOMAN</a>
            </li>
            <li>
              <a>KIDS</a>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-xl'>LOGO</a>
      </div>
      {/* CENTER */}
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>MEN</a>
          </li>
          <li>
            <a>WOMEN</a>
          </li>
          <li>
            <a>KIDS</a>
          </li>
        </ul>
      </div>
      {/* END */}
      <div className='navbar-end '>
        <span className='btn btn-ghost btn-circle'>
          <FiSearch className='text-xl' />
        </span>
        {/* CART */}
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <div className='indicator'>
              <BsCart2 className='text-xl' />
              <span className='badge badge-sm indicator-item'>8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'>
            <div className='card-body'>
              <span className='font-bold text-lg'>8 Items</span>
              <span className='text-info'>Subtotal: $999</span>
              <div className='card-actions'>
                <button className='btn btn-primary btn-block'>View cart</button>
              </div>
            </div>
          </div>
        </div>
        {/* USER */}
        {user === null ? (
          <button className='btn'>Login</button>
        ) : (
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
              <Link to='/login'>
                <BiUser className='text-2xl' />
              </Link>

              {/* <div className='w-10 rounded-full'>
              <img src='https://i.pinimg.com/564x/60/f3/0f/60f30f4ed266053d119e4e844be0ec6f.jpg' />
            </div> */}
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
