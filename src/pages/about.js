import React from 'react';
import {Link, NavLink} from "react-router-dom";

import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "About | " + Config["SITE TITLE"]
const DESC = "Shopping"
const CANONICAL = Config.SITE_DOMAIN + "/";

class About extends React.Component {
    render() {
        return (
            <div>
                   <Helmet>
            <title>
                {TITLE}
            </title>
            <link rel = "canonical" href={CANONICAL} />
            <meta name="description" content={DESC} />
        </Helmet>
 <div id="overall1">
      <a class="logo">
        <img id="logoimg" src={require('../images/logo.png')} alt="logo" /></a>
      <ul id="navbar">
      <li><NavLink  to="/">Home</NavLink></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><a href="http://mxr6880.uta.cloud/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                        <li><Link to="/login">Sign In</Link></li>
                        <li><Link to="/signup">Register</Link></li>
                    </ul>

    </div>

    <div id="service-div">
        <div id="columnabout">
                   <p>Mercado Escolar is not just a vision ...​</p>
                   <p>It is not just a marketplace ...  It's somethin' more ...</p>
                   <p> It spreads across 20 universities over the country, helping out the students and staff grab hold of the desired necessities. Each of which holds no less than 20 employees working for the sole purpose of serving you !!!</p>
        </div>
        <div id="aboutimage"><p><img id="aboutimg" src={require('../images/Picture1.png')} alt="logo"/></p></div>  
    </div>
            </div>
        );
    }
}
export default About;