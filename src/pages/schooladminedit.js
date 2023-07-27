import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";
import axios from "axios";

function SchoolAdminEdit() {
  const navigate = useNavigate();
    
    const [item, setItem] = useState([]);
    const [auth, setAuth] = useState('');
    const [user, setUser] = useState('');
    const [userdata, setUserData] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [university, setUniversity] = useState('');
    const { value, setValue } = useContext(UserContext);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [actor, setActor] = useState('');
    const [error, setError] = useState('')

    const registerHandle = async (e) => {
      e.preventDefault()
      let config = { method: "POST", username: username, email: email, university: university, phone_number: phone_number, password: password, actor: actor }
  
      try {
        const { data } = await axios
          .post('http://localhost/backendphp/studentedit.php', config)
          .then((response) => {
            //console.log(response.data)
            navigate('/login')
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (error) {
        setTimeout(() => {
          setError('Invalid credentials...')
        }, 10)
      }
    }
  

    const logout=()=>{
      localStorage.removeItem('email');
      localStorage.clear();
      navigate('/login');
    }

    useEffect(() => {
      var auth= localStorage.getItem('email');
      if(auth==null) {
        navigate('/login')
      }
      var username=localStorage.getItem('username')
      var userdata=localStorage.getItem('email')
      var phone_number=localStorage.getItem('phone')
      var university=localStorage.getItem('university')
      setAuth(auth);
      setUser(username);
      setUserData(userdata);
      setPhoneNumber(phone_number);
      setUniversity(university);
      }, []);

  return(

      <div id="body">
        <div id="overall1">
          <a class="logo"> <img id="logoimg" src={require('../images/logo.png')}  alt="logo" /></a>
          <ul id="navbar">
          <li><Link  to="/schooladmin">Home</Link></li>
                        <li><Link to="http://mxr6880.uta.cloud/">Blog</Link></li>
                        <li><Link to="/login" onClick={logout}>Logout</Link></li>
                    </ul>
        </div>
        <div id="service-div">
          <div id="cards_wrap">
          <form onSubmit={registerHandle} method='post'>
              <div id="card_item">
                <div id="card_innersignup">
                  <h1 id="titletext">Edit Profile</h1>
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
                        type="tel" 
                        onChange={(e) => setPhoneNumber(e.target.value)}
                         placeholder="123-456-7890" required />
                     
                    </div>

                    <div class="form-group">
                      <label id="login-input" for="">Email ID:</label>
                      <input
                        placeholder="Email"
                        type="email"
                        class="signupformcontrol"
                        onChange={(e) => setEmail(e.target.value)}
                         required />
                        
                    </div>

                    <div class="form-group">
                      <label id="login-input" for="">Set Password:</label>
                      <input
                        placeholder="Password"
                        type="password"
                        class="signupformcontrol"
                         onChange={(e) => setPassword(e.target.value)}
                         required />
                    </div>

                    <div class="form-group">
                      <label id="login-input" for="">Confirm Password:</label>
                      <input
                        placeholder="Confirm Password"
                        type="password"
                        class="signupformcontrol"
                        required
                      />
                    </div>
                    <label >Please select an actor type </label>


              <label for="actor">School Admin</label>
              <input id="actor" type="radio" name="role" value="School Admin" onChange={(e) => setActor(e.target.value)} style={{ height: 15, width: 'auto' }} required />
               </div>

                  <div id="btn-group">
                    <input
                      type="submit"
                      class="loginbutton"
                      value="Update details"
                      onclick="location.href='mailto:bhoomi.shah2049@gmail.com';"
                    />
                  </div>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}
export default SchoolAdminEdit;