import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
  return (
    <>
    <section className="background">
            <div className="center">Order Online Now</div>
            <h3 className="center">Our Specialty Cuisine</h3>
            <div className="flex items-center">
                <NavLink to="/">Breakfast</NavLink>
                <NavLink to="/">Lunch</NavLink>
                <NavLink to="/">Dinner</NavLink>
                <NavLink to="/">Dessert</NavLink>
                <NavLink to="/">Shakes</NavLink>
                
            </div>
            <section>
            <img className="image" src="#"></img>
            <img className="image" src="#"></img>
            <img className="image" src="#"></img>
            <img className="image" src="#"></img>
            </section>
        </section>
        </>
  )
}

export default Menu;