import React from 'react';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      
      <section>
      
        <section className="firstsection">
            <section className="style">
            <span>About us</span>
            <h2>Discover Our Restaurant Story</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur expedita voluptates qui, facere consequatur laborum nihil inventore quibusdam suscipit illo distinctio at quam. In, non molestias sequi autem beatae tempore.</p>
            <input type=button value="Discover Menu">
            </section>
        </section>
        <section className="background">
            <div className="center">Order Online Now</div>
            <h3 className="center">Our Specialty Cuisine</h3>
            <ol>
                <li><a href="#">Breakfast</a></li>
                <li><a href="#">Lunch</a></li>
                <li><a href="#">Dinner</a></li>
                <li><a href="#">Dessert</a></li>        
                <li><a href="#">Shake</a></li>
            </ol>
            <section>
            <img className="image" src="#">
            <img className="image" src="#">
            <img className="image" src="#">
            <img className="image" src="#">
            </section>
        </section>
        <section className="center">
            <div>Book Table</div>
            <h4>Opening Hours</h4>
            <img src="#">
            <div>Call Now</div>
            <div>888-123-0123</div>
            <section>
                <section className="center fifty">
                <h5>Monday to Tuesday</h5>
                <span>09:00am-22:00pm</span>
                </section>
                <section className="center fifty">
                <h5>Friday to Sunday</h5>
                <span>11:00am-20:00pm</span>
                <img className= "video" src="#">
                </section>
            </section>
        </section>
        <section className="center">
            <span>Testimonials</span>
            <h4>Customers Say</h4>
            <img className="block" src="#">
            <span>Mr. John Smith</span>
            <span>Art Director</span>
            <img className="block" src="#">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus illo est commodi magni facilis tempora neque aut voluptates ducimus. Quaerat labore aspernatur quis distinctio quia facilis pariatur impedit laudantium repellendus facere fugiat, optio iste incidunt earum inventore voluptatum laboriosam fuga dolorum modi voluptatem deleniti? Provident assumenda debitis numquam unde ipsa!</p>
        </section> 
        </section>
    </>
    
  )
}

export default App;