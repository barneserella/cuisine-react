import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/cuisine2.jpg';


const Navbar = () => {
    const linkClass = ({ isActive }) => isActive ? 'bg-white text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
    : 'text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
   
    <nav className='bg-cover bg-center h-screen style="background-image: /src/assets/img/cuisine.png"'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <img className='h-10 w-auto' src={logo} alt='Cuisine Website' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                Cuisine Website
              </span>
            </NavLink>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/' className={linkClass}>
                  About Us
                </NavLink>
                <NavLink to='/' className={linkClass}>
                  Menu
                </NavLink>
                <NavLink to='/' className={linkClass}>
                  Order
                </NavLink>
                <NavLink to='/' className={linkClass}>
                  Blog
                </NavLink>
                <NavLink to='/' className={linkClass}>
                  Location
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
            // {/* <ul>
            //     <li><a href="#">Home</a></li>
            //     <li><a href="#">About Us</a></li>
            //     <li><a href="#">Menu</a></li>
            //     <li><a href="#">Order Now</a></li>
            //     <li><a href="#">Blog</a></li>
            //     <li><a href="#">Location</a></li>
            // </ul> */}

               
  )
}

export default Navbar;