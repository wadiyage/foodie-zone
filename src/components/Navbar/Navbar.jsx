import React from 'react'
import Logo from '../../assets/logo/FOODIE ZONE.png'
import { FaCartShopping } from "react-icons/fa6";
import DarkModeToggle from './DarkModeToggle';



const Navbar = () => {
  return (
    <div className='shadow-lg bg-white text-black dark:bg-gray-900 dark:text-white duration-200'>
      <div className='container px-3 py-2 sm:py-0'>
        <div className="flex justify-between items-center">
          {/* Foodie Zone */}
          <div>
            <a href='#' className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
              <img src={Logo} alt='' className='w-18' />
              Foodie Zone
            </a>
          </div>
          {/* Navigation + Cart */}
          <div className='flex items-center gap-4'>
            <ul className='hidden sm:flex gap-4'>
              <li>
                <a href='#' className='inline-block py-4 px-4 hover:text-primary'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='inline-block py-4 px-4 hover:text-primary'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='inline-block py-4 px-4 hover:text-primary'>
                  Contact
                </a>
              </li>
            </ul>

            {/* Dark Mode Toggle */}
            <DarkModeToggle />

            <button className='bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full cursor-pointer flex items-center gap-5 hover:scale-105 duration-300'>
              Order
              <FaCartShopping className='text-xl text-white drop-shadow-sm' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
