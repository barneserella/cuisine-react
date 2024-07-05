import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <> 
        <section>
            
            <h1>Welcome To Our Cuisine Restaurant</h1>
            <form className="headline">
                <input type="text" name="search" placeholder="Search..">
            </form>
            <input type="button" value="Location">
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/facebook' className={linkClass}>
                    <img className='h-10 w-auto' src={logo} alt='Facebook' />
                </NavLink>
                <NavLink to='/instagram' className={linkClass}>
                    <img className='h-10 w-auto' src={logo} alt='Instagram' />
                </NavLink>
                <NavLink to='/twitter' className={linkClass}>
                    <img className='h-10 w-auto' src={logo} alt='Twitter' />
                </NavLink>
              </div>
        </section>
    </>  
        
  )
}

export default Header;