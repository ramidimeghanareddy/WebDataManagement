import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')


  const action = async (e) => {
    e.preventDefault()

    let config = {method: "POST",email:email}
    try {
        const { data } = await axios
          .post('http://localhost/backendphp/forgotpassword.php', config)
          .then((response) => {
            //console.log(response.data)
            alert("Password link has been sent to your registered email Id")
            navigate('/login');
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (error) {
        setTimeout(() => {
          // alert('Invalid credentials...')
        }, 10)
      }
    }
        return (
            <div id="body">
            <div id="overall1">
              <a class="logo"> <img id="logoimg" src={require('../images/logo.png')} alt="logo" /></a>
              <ul id="navbar">
                <div>
                  <li></li>
                </div>
        
                <li><Link  to="/">Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="http://mxr6880.uta.cloud/">Blog</Link></li>
                <li><Link to="/login">Sign In</Link></li>
                <li><Link to="/signup">Register</Link></li>
              </ul>
            </div>
            <div id="service-div">
              <form onSubmit={action} method="post">
                <div id="card_innerforgot">
                  <h1 id="titletext">FORGOT PASSWORD</h1>
                  <hr />
                  <div id="formgroupmain">
                  <div class="form-group">
                    <label id="login-input" for="">Email id:</label>
                    <input type="email" class="form-control"                       onChange={(e) => setEmail(e.target.value)}
 required />
                  </div>
                  <a id="formhref">Your new password will be sent to your above email.</a>
                  </div>
                  <div id="btn-group">
                    <input
                    type="submit"
                    class="loginbutton"
                    value="Send"
                    onclick="location.href='mailto:bhoomi.shah2049@gmail.com';"
                  />
                  </div>
                </div>
              </form>
            </div>

            </div>

        );
}
export default ForgotPassword;