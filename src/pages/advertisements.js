import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";
import axios from "axios";

function Advertisements() {

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
      
        fetch("http://localhost/backendphp/ads.php")
            .then((res) => res.json())
            .then((result) => {
                setItem(result);
                console.log(result);
            });
    }, []);

    const navigate = useNavigate();
    return (
        <div>
            <div id="overall1">
                <a class="logo">
                    <img id="logoimg" src={require('../images/logo.png')} alt="logo" /></a>
                <ul id="navbar">


                    <li><Link to="/studentprofile">Home</Link></li>
                    <li><Link to="http://mxr6880.uta.cloud/">Blog</Link></li>
                    <li><Link to="/login" onClick={logout}>Logout</Link></li>
                </ul>
            </div>
            <div id="blockhead_student">
                <div id="mainblock">
                    <div id="blockssidebar">
                        <div class="profilemain">
                            <link href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" rel="stylesheet" />
                            <div id="studentdivstarbucks">
                                <img src={require('../images/userimg.png')} class="main-profile-img" />
                                <i class="fa fa-edit"></i>
                            </div>
                            <p>
                            <p id="profile">{user}</p>
                                <p id="details">{userdata}</p>
                                <p id="details">{phone_number}</p>
                                <p id="details">{university}</p>
                            </p>

                            <div id="btn-group">
                                <div id="loginbutton"> <Link id="studenthref" to="/studentedit">Edit Profile</Link> </div>
                            </div>
                            <br />
                        </div>
                    </div>
                    <section id="middleblock">
                        <div id="wholemiddlemain">

                            <p id="caption">Advertisements</p>


                            <div id="service-div">
                                {
                                    item.map((item) => (

                                        <div class="cards_wrap">
                                            <div id="cardsetting">
                                                <div>
                                                    <img src={require('../images/sampleadvertisement.jpeg')} alt="chat" id="imgsize" />
                                                </div>
                                                <p> {item.adname} </p>
                                                <p> {item.ad_description} </p>
                                                <p> {item.website} </p>

                                            </div>
                                        </div>


                                    ))}

                            </div>




                        </div>

                    </section>
                </div>

            </div>
        </div>

    );

}
export default Advertisements;