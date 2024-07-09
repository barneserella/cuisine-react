import React from 'react';
import { NavLink } from 'react-router-dom';
// import logoFacebook from 
// import logoInstagram from
// import logoTwitter from 

const Header = () => {

  const linkClass = ({ isActive }) => isActive ? 'bg-white text-black hover:bg-gray-900 hover:text-black rounded-md px-3 py-2'
    : 'text-black hover:bg-gray-900 hover:text-black rounded-md px-3 py-2';

  return (
    <> 
        <section>
            
            <h1>Welcome To Our Cuisine Restaurant</h1>
            <form className="headline">
                <input type="text" name="search" placeholder="Search..."></input>
            </form>
            <button value='location'>Find Location</button>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/facebook' className={linkClass}>
                    <img className='h-10 w-auto' src={logoFacebook} alt='Facebook' />
                </NavLink>
                <NavLink to='/instagram' className={linkClass}>
                    <img className='h-10 w-auto' src={logoInstagram} alt='Instagram' />
                </NavLink>
                <NavLink to='/twitter' className={linkClass}>
                    <img className='h-10 w-auto' src={logoTwitter} alt='Twitter' />
                </NavLink>
              </div>
            </div>
        </section>
    </>  
        
  )
}

export default Header;