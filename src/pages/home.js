import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Helmet} from "react-helmet";
import Config from "../Config.json";
import About from './about';

const TITLE = "Home | " + Config["SITE TITLE"]
const DESC = "Shopping"
const CANONICAL = Config.SITE_DOMAIN + "/";

class Home extends React.Component {
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
                        <img id="logoimg" src={require('../images/logo.png')}  alt="logo" /></a>

                    <div id="headerchange">
                        <li><a href="home.html">Home</a></li>
                    </div>

                    <ul id="navbar">
                    <li><NavLink end activeClassName="current" to="/">Home</NavLink></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><a href="http://mxr6880.uta.cloud/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                        <li><Link to="/login">Sign In</Link></li>
                        <li><Link to="/signup">Register</Link></li>
                    </ul>


                </div>

                <div>
                    <h1 id="moretitle">SHOP AT</h1>
                    <div id="middleyellow">
                        <li><a id="middleyellowText">Mercado Escolar</a></li>
                        <li><a id="middleyellowsmall">FILL YOUR CARTS AND HEARTS</a></li>
                        {/* <li><input id="myinput" type="text" placeholder="Search.." /></li> */}
                    </div>
                    <div>
                        <div id="bottomtabs">
                            <div id="tabs1">GROCERIES</div>
                            <div id="tabs2" >STATIONARY</div>
                            <div id="tabs3" >HOUSEHOLDS</div>
                            <div id="tabs4" >ELECTRONICS</div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
export default Home;