import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";


function SchoolAdmin() {

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
      fetch("http://localhost/backendphp/schooladmin.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        // console.log(result[1]["username"]);
        // setItem(result)
      });
  }, []);

    return (

        <div id="bodysuper">

            <Helmet>
                <title>
                    {"School Admin"}
                </title>
            </Helmet>   
                <div id="overallsuper">
      <a class="logo">
        <img id="logoimg" src={require('../images/logo.png')}  alt="logo"/></a>
        

          <ul id="navbar">
            
          <li><Link to="/schooladmin">Home</Link></li>
          <li><a href="http://mxr6880.uta.cloud/" target="_blank" rel="noopener noreferrer">Blog</a></li>
          <li><Link to="/login" onClick={logout}>Logout</Link></li>
          </ul>
      </div>
    <hr id="hrsuper"/>
  
  <div id="headertop">
    <a id="welcometexts">Hi, Welcome back! This is your dashboard</a>
      
  </div>
  <div id="content">
    
    
 <div id="blockhead">
  <div id="mainblock">
  <div id="blockssidebar">
    <div class="profilemain">
      <link href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" rel="stylesheet"/>
      <div id="studentdiv">
        <img src={require('../images/userimg.png')} class="main-profile-img" />
        <i class="fa fa-edit"></i>
      </div>
      <p id="profile">{user}</p>
                        <p id="details">{userdata}</p>
                        <p id="details">{phone_number}</p>
                        <p id="details">{university}</p>
      <div id="btn-group">
        <input type="button" class="loginbutton" value="Edit Profile"/>
        </div>
    </div>
  </div>
  <section id="middleblock">

    <section id="sectionmiddle">
  
      <div id="blocks"><p><Link id="studenthrefadmin" to="/managestudentschool">Manage Students</Link></p></div>
      <div id="blocks"><p><Link id="studenthrefadmin" to="/managebusinessownerschool">Manage Business Owner</Link></p></div>
        <div id="blocks"><p><Link id="studenthrefadmin" to="/moderateclubs">Moderate Clubs</Link></p></div>
        <div id="blocks"><p><Link id="studenthrefadmin" to="/moderateposts">Moderate Posts</Link></p></div>
  
    </section>

      <section>
        <p id="profileadmin">View Report</p>
        <div id="manage_graph_middle">
        
            <div id="tablescolumn">
             <div id="managetable">
               <h1 id="details">Monthly Report</h1>
               <table id="table_gapnew">
                 <tr>
  
                <th id="table_setting">Business Owners</th>
                <th id="table_setting">School Manager</th>
                <th id="table_setting">Total Products</th>
                <th id="table_setting"> Clubs</th>
              </tr>
              <tr id="tablerow">
  
                <td id="table_data"> Starbucks </td>
                <td id="table_data"> John </td>
                <td id="table_data"> 25 </td>
                <td id="table_data"> Maths </td>
             
              </tr>
              <tr id="tablerow">
  
                <td id="table_data"> Mac Donalds </td>
                <td id="table_data"> John </td>
                <td id="table_data"> 40 </td>
                <td id="table_data"> Painting</td>
            
              </tr>
             </table>
            
            </div>
            </div>
             <div id="add_graph">
       
        
              <div class="chartsuper"></div>
              
              <ul class="keysuper">
                <li>
                  <strong class="percent redsuper">4%</strong>
                  <span class="choice">Jump right in, startupfille here I come.</span>
                </li>
                <li>
                  <strong class="percent graysuper">4%</strong>
                  <span class="choice">Email back to discuss, flattered and positive.</span>
                </li>
                <li>
                  <strong class="percent purplesuper">6%</strong>
                  <span class="choice">Respond and say "Thanks but no thanks."</span>
                </li>
                <li>
                  <strong class="percent bluesuper">9%</strong>
                  <span class="choice">Email back to discuss, all business.</span>
                </li>
                <li>
                  <strong class="percent yellowsuper">31%</strong>
                  <span class="choice">Email back to discuss, but skeptically.</span>
                </li>
                <li>
                  <strong class="percent orangesuper">46%</strong>
                  <span class="choice">Delete the email.</span>
                </li>
              </ul>
              
              
                        
                  </div>
                  </div>
                </section>
                </section>
              </div>
                  
                </div>
              </div>
              </div>
              
                               
                );
    }

  export default SchoolAdmin;