import React from 'react';
import { BsFilter } from 'react-icons/bs';
import { FaAngleUp } from 'react-icons/fa';

export default function SideBar() {
  return (
    <>
      <ul className='sidebar border-2 w-56 p-[1rem]'>
        <span className='border-2 pl-3 mb-2 font-bold flex items-center gap-2'>
          <BsFilter className='text-2xl' />
          <h1>SHOP BY</h1>
        </span>
        {/* DROPDOWNN */}
        <li className='dropdown__list  '>
          <a href='#' className='dropdown__link'>
            <span>Category</span>
            <FaAngleUp className='dropdown__arrow' />
            <input type='checkbox' className='dropdown__check' />
          </a>
          <div className='dropdown__content'>
            <ul className='dropdown__sub'>
              <li className='dropdown__li'>
                <a href='#' className='dropdown__anchor'>
                  Pants
                </a>
              </li>
              <li className='dropdown__li'>
                <a href='#' className='dropdown__anchor'>
                  Shirt
                </a>
              </li>
              <li className='dropdown__li'>
                <a href='#' className='dropdown__anchor'>
                  T-Shirt
                </a>
              </li>
              <li className='dropdown__li'>
                <a href='#' className='dropdown__anchor'>
                  Shoes
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className='dropdown__list  '>
          <a href='#' className='dropdown__link'>
            <span>Marca</span>

            <FaAngleUp className='dropdown__arrow' />
            <input type='checkbox' className='dropdown__check' />
          </a>
          <div className='dropdown__content'>
            <ul className='dropdown__sub'>
              <li className='dropdown__li'>
                <a href='#' className='dropdown__anchor'>
                  Project 1
                </a>
              </li>
              <li className='dropdown__li'>
                <a href='#' className='dropdown__anchor'>
                  Project 2
                </a>
              </li>
              <li className='dropdown__li'>
                <a href='#' className='dropdown__anchor'>
                  Project 3
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className='dropdown__list  '>
          <a href='#' className='dropdown__link'>
            <span>Color</span>

            <FaAngleUp className='dropdown__arrow' />
            <input type='checkbox' className='dropdown__check' />
          </a>
          <div className='dropdown__content'></div>
        </li>
        <li className='dropdown__list '>
          <a href='#' className='dropdown__link'>
            <span>Price</span>

            <FaAngleUp className='dropdown__arrow' />
            <input type='checkbox' className='dropdown__check' />
          </a>
          <div className='dropdown__content'></div>
        </li>
      </ul>
    </>
  );
}
