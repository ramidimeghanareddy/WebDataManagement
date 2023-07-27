
import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import axios from "axios";
import UserContext from "../components/UserContext";
import EmailContext from "../components/EmailContext";


function Login() {


  const [email, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { value, setValue } = useContext(UserContext)
  const { emailLogin,setEmailLogin} = useContext(EmailContext)

  const [isLoggedin, setLogin] = useState(false)


  const loginHandle = async (e) => {
    e.preventDefault()
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;

    
     if (email==="" ) {
      alert("Please input your email address");
     }
     
    else if ( !pattern.test(email)) {
      alert("Please enter valid email address");

    }
     else if (password === "") {
      alert("Please provide your password!");
    }
    else {
    let config = { method: 'POST', email: email, password: password }

    try {
      await axios
        .post('http://localhost/backendphp/login.php', config)
        .then((response) => {
          // debugger
          console.log(response.data)

          setLogin(true)
          if (Object.keys(response.data.userData).length > 0) {
            let game = { ...response.data.userData }
            game = { ...game, isLogged: isLoggedin }
            window.localStorage.setItem('email',response.data.userData.email)
            window.localStorage.setItem('username',response.data.userData.username)
            window.localStorage.setItem('email',response.data.userData.email)
            window.localStorage.setItem('phone',response.data.userData.phone_number)
            window.localStorage.setItem('university',response.data.userData.university)

            setValue(game);
            setEmailLogin(game.email)
            if (response.data.userData.actor == 'Student') {
              navigate('/studentprofile')
            }
            else if (response.data.userData.actor == 'Business Owner') {
              navigate('/businessowner')
            }
            else if (response.data.userData.actor == 'School Admin') {
              navigate('/schooladmin')
            }
            else if (response.data.userData.actor == 'Super') {
              navigate('/superadmin')
            }

          }
        })
        .catch((error) => {
          // navigate('/signup')
          console.log('no authorization', error)
          alert('Invalid email or password')
        })
    } catch (error) {
      setTimeout(() => {
        // setError('Invalid credentials...')
        // alert('Invalid email or password')

      }, 10)
    }
  }
  }

  return (
    <div id="body">

      <div id="overall1">
        <a class="logo"> <img id="logoimg" src={require('../images/logo.png')} alt="logo" /></a>
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

        <form novalidate="novalidate" onSubmit={loginHandle} method='post'>

          <div id="card_inner">
            <h1 id="titletext">SIGN IN</h1>
            <hr />
            <div id="formgroupmain">
              <div class="form-group">
                <label id="login-input" for="">Email ID:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  class="signupformcontrol"
                  onChange={(e) => setUserId(e.target.value)}
                  required
                />
              </div>

              <div class="form-group">
                <label id="login-input" for="">Password:</label>
                <input
                  type="password"
                  name="password"
                  class="signupformcontrol"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}

                  required
                />
              </div>
            </div>
            <div id="login-error-msg-holder">
              <p id="login-error-msg">
                Invalid username
                <span id="error-msg-second-line">and/or password</span>
              </p>
            </div>
            <Link to="/forgotpassword"  id="formhref" >Forgot Password?</Link>

            {/* <Link to="/forgotpassword">Forgot Password?</Link><a id="formhref" href="forgotpassword.html">Forgot Password?</a> */}
            <div id="btn-group">
              <div id="loginbuttoncheck">
                <input
                  class="loginbutton"
                  type="submit"
                  id="submit"
                  value="Login"
                  
                />

              </div>
            </div>
            <a id="formhref">Not yet member? </a>
            <Link id="formhrefsign" to="/signup">Signup now</Link>
          </div>

        </form>

      </div>
    </div>
  );
}

export default Login;