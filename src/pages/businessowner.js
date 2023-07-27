import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";


function BusinessOwner() {
    
    // const { value, setValue } = useContext(UserContext);
    const navigate = useNavigate();
    
    const [item, setItem] = useState([]);
    
    const [auth, setAuth] = useState('');
    const [user, setUser] = useState('');
    const [userdata, setUserData] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [university, setUniversity] = useState('');


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

      fetch("http://localhost/backendphp/businessownertable.php")
        .then((res) => res.json())
        .then((result) => {
          setItem(result);
          console.log(result);
        });
    }, []);

    return (

        <div id="bodysuper">

            <Helmet>
                <title>
                    {"Business Owner"}
                </title>
            </Helmet>
            <div id="overallsuper">
                <a class="logo">
                    <img id="logoimg" src={require('../images/logo.png')} alt="logo" /></a>
                <ul id="navbar">

                    <li><Link to="/businessowner">Home</Link></li>
                    <li><a href="http://mxr6880.uta.cloud/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                    <li><Link to="/login">Logout</Link></li>
                </ul>
            </div>
            <hr id="hrsuper" />

            <div id="headertop">
                {/* <a id="welcometexts">Hi,{value.username} Welcome back! This is your dashboard</a> */}
            </div>
            <div id="content">


                <div id="blockhead">
                    <div id="mainblock">
                        <div id="blockssidebar">
                            <div class="profilemain">
                                <link href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" rel="stylesheet" />
                                <div id="studentdivstarbucks">
                                    <img src={require('../images/startbucks.png')} class="main-profile-img" />
                                    <i class="fa fa-edit"></i>
                                </div>
                                <p>
                                <p id="profile">{user}</p>
                                <p id="details">{userdata}</p>
                                <p id="details">{phone_number}</p>
                                <p id="details">{university}</p>
                            </p>

                                <div id="btn-group">
                                    <input type="button" class="loginbutton" value="Edit Profile" />
                                </div>
                                <br />
                            </div>
                        </div>
                        <section id="middleblock">

                            <section id="sectionmiddle">

                                <div id="blocks"><p><Link id="studenthrefadmin" to="/manageproducts">Manage Products</Link></p></div>
                                <div id="blocks"><p><Link id="studenthrefadmin" to="/manageadvertisement">Manage Advertisements</Link></p></div>
                                <div id="blocks"><p><Link id="studenthrefadmin" to="/chatwithstudents">Chat</Link></p></div>

                            </section>

                            <section>
                                <p id="profileadmin">View Report</p>
                                <div id="manage_graph_middle">

                                    <div id="tablescolumn">
                                        <div id="managetable">
                                            <h1 id="details">Monthly Report</h1>
                                            <table id="table_gapnew">
                                                <tr>
                                                <th id="table_setting">Product Name</th>
                                                    <th id="table_setting">Product Description</th>
                                                    <th id="table_setting">Product Price</th>
                                                    <th id="table_setting">Business Manager</th>
                                                    <th id="table_setting"> Total Sold</th>
                                                    <th id="table_setting">Total Products</th>
                                                </tr>
                                                {item.map((item) => (
                                                    <tr key={item.id}>
                                                        <td id="table_data">{item.pname}</td>
                                                        <td id="table_data">{item.p_description}</td>
                                                        <td id="table_data">{item.price}</td>
                                                        <td id="table_data">{item.business_manager}</td>
                                                        <td id="table_data">{item.sold}</td>
                                                        <td id="table_data">{item.instock}</td>

                                                    </tr>
                                                ))}

                                            </table>

                                        </div>
                                    </div>
                                    <div id="add_graph">


                                        <div class="chartsuper"></div>

                                        <ul class="keysuper">
                                            <li>
                                                <strong class="percent redsuper">70%</strong>
                                                <span class="choice">Products.</span>
                                            </li>
                                            <li>
                                                <strong class="percent graysuper">30</strong>
                                                <span class="choice">Total Products.</span>
                                            </li>
                                            <li>
                                                <strong class="percent purplesuper">6%</strong>
                                                <span class="choice">Sold Product</span>
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
export default BusinessOwner;