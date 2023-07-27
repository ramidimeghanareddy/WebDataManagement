import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";


function StudentProfile() {

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
      
      // (userdata) => userdata.json()
      // value.username=localStorage.getItem('email');
      fetch("http://localhost/backendphp/studentprofile.php")
        .then((res) => res.json())
        .then((result) => {
          setItem(result);
          console.log(result);
        });
    }, []);

  return (
    <div>
      <div id='body'>
        <div id="overallsuper">
          <a class="logo">
            <img id="logoimg" src={require('../images/logo.png')} alt="logo" /></a>
          <ul id="navbar">

            <li><Link to="/studentprofile">Home</Link></li>
            <li><a href="http://mxr6880.uta.cloud/" target="_blank" rel="noopener noreferrer">Blog</a></li>
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
                
                <p id="profile">{user}</p>
                                <p id="details">{userdata}</p>
                                <p id="details">{phone_number}</p>
                                <p id="details">{university}</p>
                <div id="btn-group">
                  <input type="button" class="loginbutton" value="Edit Profile" />
                </div>
                <p id="listmain"> <Link id="hrefmain" to="/your_orders">Your Orders</Link></p>
                <p id="listmain"> <Link id="hrefmain" to="/sellproduct">Sell a product</Link></p>
                {/* <p id="listmain"><Link id="hrefmain" to="/postadvertisements"> Post an advertisement</Link></p> */}
                <p id="listmain"> <Link id="hrefmain" to="/advertisements"> Advertisements </Link></p>
              </div>
            </div>
            <section id="middleblock">
              <div id="wholemiddlemain">
                <div id="middleyellowstudent">
                  <li><a id="middleyellowTextProfile">Welcome back {user}!!!</a></li>
                  <li><a id="middleyellowsmallProfile">CONTINUE YOUR SHOPPING</a></li>

                </div>
                <div id="studentbody">
                  <div id="sectionmiddleprofile">
                    <div id="studentblocks"><Link id="studenthref" to="/exploreproducts">Explore Products</Link>
                      <div id="explorecard">
                        <img id="productimage" src={require('../images/sampleproduct.jpg')} alt="Denim Jeans" />
                        <p id="product_details">Explore the products you want to purchase..</p>
                      </div>
                    </div>

                    <div id="studentblocks"><Link id="studenthref" to="/exploreclubs">Explore Clubs</Link>
                      <div id="explorecard">
                        <img id="productimage" src={require('../images/sampleclubs.png')} alt="Denim Jeans" />
                        <p id="product_details">Explore the clubs you want to explore..</p>
                      </div> </div>

                    <div id="studentblocks"><Link id="studenthref" to="/exploreposts">Explore Posts</Link>
                      <div id="explorecard">
                        <img id="productimage" src={require('../images/post2.jpg')} alt="Denim Jeans" />
                        <p id="product_details">Explore the posts you want to see..</p>

                      </div> </div>

                    <div id="studentblocks"><Link id="studenthref" to="/advertisements">Explore Advertisements</Link>
                      <div id="explorecard">
                        <img id="productimage" src={require('../images/sampleadvertisement.jpeg')} alt="Denim Jeans" />
                        <p id="product_details">Explore the advertisement you want to see..</p>

                      </div> </div>

                  </div>
                </div>


              </div>

            </section>
          </div>

        </div>
      </div>
    </div>


  );

}
export default StudentProfile;