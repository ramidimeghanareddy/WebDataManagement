
import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function Signup() {


  const [username, setUsername] = useState('')
  const [university, setUniversity] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [pwdConfirm, setPwdConfrim] = useState('')
  const [actor, setActor] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const registerHandle = async (e) => {
    e.preventDefault()
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;

    if (username === undefined || username === null || username === "") {
      alert("Please input your username");
    } else if (!university) { 
      alert("Please input your university");

    } else if (phone_number.length!=10) {
      alert("Please enter valid phone number");

    }
    else if (!email) {
      alert("Please input your email address");

    }
    
    else if (!pattern.test(email)) {
      alert("Please enter valid email address");

    } else if (password === "") {
      alert("Please provide your password!");
    }
    else if (password !== pwdConfirm) {
      alert("Passwords don't match");
    }
    else if (actor === "") {
      alert("Please select user type to register");
    }
    else {
      // make API call

      let config = { method: "POST", username: username, email: email, university: university, phone_number: phone_number, password: password, actor: actor }

      try {
        const { data } = await axios
          .post('http://localhost/backendphp/signup.php', config)
          .then((response) => {
            //console.log(response.data)
            alert("You've signed up successfully. Proceed to login");
            navigate('/login')
          })
          .catch((error) => {
            console.log('no authorization', error)
            alert('Oops user already exists! Try Login again!!')
          })
      } catch (error) {
        setTimeout(() => {
          // alert('Invalid credentials...')
        }, 10)
      }
    
    }
  }






  return (

    <div id="body">

      <Helmet>
        <title>
          {"Register"}
        </title>
      </Helmet> 
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
        <div id="cards_wrap">
          <form novalidate="novalidate" onSubmit={registerHandle} method='post'>
            <div id="card_item">
              <div id="card_innersignup">
                <h1 id="titletext">REGISTER</h1>
                <hr />
                <div id="formgroupmain">
                  <div class="form-group">
                    <label id="login-input" for="">Name:</label>
                    <input
                      placeholder="Name"
                      type="text"
                      class="signupformcontrol"
                      pattern="[a-zA-Z ]+" onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label id="login-input" for="">University:</label>
                    <input
                      placeholder="University"
                      type="text"
                      class="signupformcontrol"
                      pattern="[a-zA-Z ]+" onChange={(e) => setUniversity(e.target.value)}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label id="login-input" for="">Phone number:</label>
                    <input
                      maxlength="10"
                      class="signupformcontrol"
                      type="tel" pattern="[0-9]{10}"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="123-456-7890" 
                      required />

                  </div>

                  <div class="form-group">
                    <label id="login-input" for="">Email ID:</label>
                    <input
                      placeholder="Email"
                      type="email"
                      class="signupformcontrol"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                       />

                  </div>

                  <div class="form-group">
                    <label id="login-input" for="">Set Password:</label>
                    <input
                      placeholder="Password"
                      type="password"
                      class="signupformcontrol"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                       />
                  </div>

                  <div class="form-group">
                    <label id="login-input" for="">Confirm Password:</label>
                    <input
                      placeholder="Confirm Password"
                      type="password"
                      class="signupformcontrol"
                      value={pwdConfirm}
                      onChange={(e) => setPwdConfrim(e.target.value)}
                      required
                    />
                  </div>
                  <label id="login-input">Please select an actor type </label>
              <div id="usertype">
            
                <input id="Student" type="radio" name="role" value="Student" onChange={(e) => setActor(e.target.value)} style={{ height: 15, width: 'auto' }} required />
                <label for="Student">Student</label>

                <input id="Business Owner" type="radio" name="role" value="Business Owner" onChange={(e) => setActor(e.target.value)} style={{ height: 15, width: 'auto' }} />
                <label for="Business Owner">Business Owner</label>
              
                <input id="Admin" type="radio" name="role" value="Admin" onChange={(e) => setActor(e.target.value)} style={{ height: 15, width: 'auto' }} />
                <label for="Admin">School Admin</label>
            
              </div>
                </div>

                <div id="btn-group">
                  <input
                    type="submit"
                    class="loginbutton"
                    value="Register"                  />
                </div>

                <a id="formhref">Already member? </a>
                <a id="formhrefsign" href="login">SignIn now</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Signup;