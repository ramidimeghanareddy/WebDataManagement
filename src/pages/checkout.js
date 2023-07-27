import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Checkout(){

    const navigate = useNavigate()
    const [error, setError] = useState('')

    const [item, setItem] = useState([]);
    const [auth, setAuth] = useState('');
    const [username, setUser] = useState('');
    const [userdata, setUserData] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [university, setUniversity] = useState('');
  
    const logout = () => {
      localStorage.removeItem('email');
      localStorage.clear();
      navigate('/login');
    }
    // const [item, setItem] = useState([]);
  
    useEffect(() => {
      var auth = localStorage.getItem('email');
      if (auth == null) {
        navigate('/login')
      }
      var username = localStorage.getItem('username')
      var userdata = localStorage.getItem('email')
      var phone_number = localStorage.getItem('phone')
      var university = localStorage.getItem('university')
      setAuth(auth);
      setUser(username);
      setUserData(userdata);
      setPhoneNumber(phone_number);
      setUniversity(university);
  
      fetch("http://localhost/backendphp/cartitems.php")
        .then((res) => res.json())
        .then((result) => {
          setItem(result);
          console.log(result);
        });
    }, []);

    const action = async (e) => {
        e.preventDefault()

        let config = {method: "POST"}
        try {
            const { data } = await axios
              .post('http://localhost/backendphp/deletecart.php', config)
              .then((response) => {
                //console.log(response.data)
                navigate('/your_orders')
              })
              .catch((error) => {
              })
          } catch (error) {
            setTimeout(() => {
              setError('Invalid credentials...')
            }, 10)
          }
        }

        const UpdateRow = async (pname) => {
            let config = {method: "POST", pname: pname,email:userdata}
        
            axios.post('http://localhost/backendphp/after_checkout.php', config)
              .then((response) => {
                // console.log(response.data)
                // window.location.reload(true);
        
              })
              .catch((error) => {
                console.log(error)
              })
          }
    
        return (
            <div id="body">
                <div id="overall1">
                    <a class="logo"> <img id="logoimg" src={require('../images/logo.png')}  alt="logo" /></a>
                    <ul id="navbar"> 
                        <li><Link  to="/studentprofile">Home</Link></li>
                        <li><a href="http://mxr6880.uta.cloud/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                        <li><Link to="/login" onClick={logout}>Logout</Link></li>
                    </ul>
                </div>

                <div id="service-div">
                    <form onSubmit={action} method="post" id="login" >
                        <div id="card_inner">
                            <h1 id="titletext">Make Your Payment</h1>
                            <hr />
                            <div id="formgroupmain">
                                <div class="form-group">
                                    <label id="login-input2" for="">Card Number</label>
                                    <input
                                        id="number"
                                        class="signupformcontrol"
                                        required
                                    />
                                </div>

                                <div class="form-group">
                                    <label id="login-input2" for="">Name on Card</label>
                                    <input
                                        class="signupformcontrol"
                                        id="text"
                                        required
                                    />
                                </div>

                                <div class="form-group">
                                    <label id="login-input2" for="">Security Code</label>
                                    <input
                                        class="signupformcontrol"
                                        id="number"
                                        required
                                    />
                                </div>

                                <div class="form-group">
                                    <label id="login-input2" for="">Valid Thru</label>
                                    <input
                                        class="signupformcontrol"
                                        id="number"
                                        required
                                    />
                                </div>
                                <div id="usertype">
                                <input id="actor" type="checkbox" onClick={() => UpdateRow(item.pname)} style={{ height: 15, width: 'auto' }} required />
                                <label for="actor">Confirm Details</label>
                                </div>

                            </div>

                            <div id="btn-group">
                    <input
                      type="submit"
                      class="loginbutton"
                      value="PAY NOW" 
                    />
                  </div>
                        </div>
                    </form>
                </div>
            </div>

        );
}

export default Checkout;