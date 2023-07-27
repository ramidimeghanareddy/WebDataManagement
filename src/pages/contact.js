import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { Link, useNavigate } from "react-router-dom";

const TITLE = "Contact | " + Config["SITE TITLE"]
const DESC = "Contact us"
const CANONICAL = Config.SITE_DOMAIN + "/";

function Contact() {
    const [name, setName] = useState('')
    //   const [phonenumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('');
    //   const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const contactHandle = async (e) => {
        e.preventDefault()
        let config = { method: "POST", name: name, email: email, message: message }

        try {
            const { data } = await axios
                .post('http://localhost/backendphp/contact.php', config)
                .then((response) => {

                    //   navigate('/login')
                    alert('Email has been sent successfully. Thank you for contacting us.')
                })
                .catch((error) => {
                    console.log(error)
                    //   setError('1Email sending unsuccessful. Please try again after sometime.')
                })
        } catch (error) {
            setTimeout(() => {
                // setError('2Email sending unsuccessful. Please try again after sometime.')
            }, 10)
        }
    }

    return (
        <div id="body">
            <div id="overall1">
                <a class="logo">
                    <img id="logoimg" src={require('../images/logo.png')} alt="logo" /></a>
                <ul id="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><a href="http://mxr6880.uta.cloud/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                    <li><Link to="/login">Sign In</Link></li>
                    <li><Link to="/signup">Register</Link></li>
                </ul>
            </div>
            <div id="service-div">
                <div class="column_contact">
                    <h1 id="getsize"> Contact Us</h1>
                    <h1 id="getsize">We would like to hear from you...</h1>
                    <form onSubmit={contactHandle} method='post'>
                        <div id="formgroupmain">
                            <div class="form-group">
                                <label id="login-input" for="">Name:</label>
                                <input type="text" class="signupformcontrol" onChange={(e) => setName(e.target.value)} required />
                            </div>

                            <div class="form-group">
                                <label id="login-input" for="">Email ID:</label>
                                <input type="email" class="signupformcontrol" onChange={(e) => setEmail(e.target.value)} required />
                            </div>

                            <div class="form-group">
                                <label id="login-input" for="">Feedback:</label>
                                <textarea class="signupformcontrol" onChange={(e) => setMessage(e.target.value)} required></textarea>
                            </div>

                            <div id="btn-group">
                                <input type="submit" value="Send" class="loginbutton" />
                            </div>
                        </div>
                    </form>
                </div>

                <div class="column_contact_us">
                    <h1 id="getsize">Reach Us out...</h1>
                    <p>
                        <a><img src={require('../images/img1.png')} id="phone_img" /></a>
                    </p>
                    <p>
                        <a><img src={require('../images/img2.png')} id="phone_img" /></a>
                    </p>
                    <p>
                        <a><img src={require('../images/img3.png')} id="phone_img" /></a>
                    </p>

                </div>

            </div >
        </div >

    );

}
export default Contact;