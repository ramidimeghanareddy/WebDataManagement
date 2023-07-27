import React from 'react';
import { Link } from 'react-router-dom';

class Services extends React.Component {
    render() {
        return (
            <div>
               <div id="body">
               <div id="overall1">
      <a class="logo"> <img id="logoimg" src={require('../images/logo.png')}  alt="logo" /></a>
      <ul id="navbar">
      <li><Link  to="/">Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><a href="http://mxr6880.uta.cloud/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                        <li><Link to="/login">Sign In</Link></li>
                        <li><Link to="/signup">Register</Link></li>
                    </ul>
    </div>

    <div id="service-div">
      <div class="cards_wrap">
          <h1 id="getsizeservice">Services</h1>
          <div id="column">
            <p>​Purchase and sell goodies and products of your's via 
             Mercado Escolar.
             </p>
          </div>
          <div id="column">
            <p>​We help you hop into several organizations and clubs of your school.</p>
          </div>
          <div id="column">
            <p>​Remain updated about the present and 
                upcoming events in your campus.
                </p>
          </div>
      </div>
    </div>
    </div>
  </div>
        );
    }
}
export default Services;