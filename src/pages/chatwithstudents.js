import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";
import axios from "axios";

function Chatwithstudents(){
    const navigate = useNavigate();
    
    const [item, setItem] = useState([]);
    const [auth, setAuth] = useState('');
    const [user, setUser] = useState('');
    const [userdata, setUserData] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [university, setUniversity] = useState('');
    const { value, setValue } = useContext(UserContext);


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

      fetch("http://localhost/backendphp/managestudentsuper.php")
        .then((res) => res.json())
        .then((result) => {
          setItem(result);
          console.log(result);
        });
      }, []);
        return (
            <div id="body">
                <div id="overall1">
                    <a class="logo">
                        <img id="logoimg" src={require('../images/logo.png')} alt="logo" /></a>
                    <ul id="navbar">

<li><Link  to="/businessowner">Home</Link></li>
<li><Link to="http://mxr6880.uta.cloud/" target="_blank" rel="noopener noreferrer">Blog</Link></li>
<li><Link to="/login" onClick={logout}>Logout</Link></li>
</ul>
                </div>

                <h1 id="caption"> Chat with Students</h1>
                <table id="tablechatnew">
                    <tr>
                        <th id="table_setting">Student</th>
                        <th id="table_setting">Name</th>
                        <th id="table_setting">Email ID</th>
                        <th id="table_setting">Phone Number</th>
                        <th id="table_setting">University</th>
                        <th id="table_setting2">Chat</th>
                    </tr>
                    {
                    item.map((item) => (
                    <tr id="tablerow">
                    <td id="table_data"> <a><img src={require('../images/student2.png')} id="msimgs" /></a> </td>
                    <td id="table_data">{item.username}</td>
                    <td id="table_data"> {item.email}</td>
                    <td id="table_data"> {item.phone_number}</td>
                    <td id="table_data"> {item.university}</td>
                    <td id="table_setting3">
                                <a className="sadmineditbutton" href="http://localhost/ChatApp/index.php" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../images/chat.png')} alt="chat" id="msimgs" />

                                </a>

                            </td>                  </tr>
                ))}
                    

                </table>
            </div>

        );
}
export default Chatwithstudents;