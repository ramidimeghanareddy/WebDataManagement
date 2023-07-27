import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext} from "react";
import axios from "axios";
import UserContext from "../components/UserContext";

function ExploreProducts(){
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

      fetch("http://localhost/backendphp/exploreproducts.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);
      });
      }, []);

  const AddRow = async (pname,price) => {
    let config = {method: "POST", pname: pname, price: price}

    axios.post('http://localhost/backendphp/addtocart.php', config)
      .then((response) => {
        // console.log(response.data)
        window.location.reload(true);

      })
      .catch((error) => {
        console.log(error)
      })
  }
  
   return (
            <div id="body">
            <div id="overallsuper">
              <a class="logo">
                <img id="logoimg" src={require('../images/logo.png')}  alt="logo"/></a>
                <ul id="navbar">

                    <li><Link  to="/studentprofile">Home</Link></li>
                    <li><a href="http://mxr6880.uta.cloud/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                    <li><Link to="/login" onClick={logout}>Logout</Link></li>
        </ul>
             </div>
             
           <div id="blockhead_student">
            <div id="mainblock">
            <div id="blockssidebar">
              <div class="profilemain">
                <link href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" rel="stylesheet"/>
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
                  <input type="button" class="loginbutton" value="Edit Profile"/>
                  </div>
                <br/>
                <p id="listmain"> <Link id="hrefmain" to="/your_orders">Your Orders</Link></p>
                               <p id="listmain"> <Link id="hrefmain" to="/sellproduct">Sell a product</Link></p>
                                {/* <p id="listmain"><Link id="hrefmain" to="/postadvertisements"> Post an advertisement</Link></p> */}
                                <p id="listmain"> <Link id="hrefmain" to="/addclubs"> Create new club </Link></p>
                            </div>
            </div>
            <section id="middleblock">
          <div id="wholemiddlemain">
            <p></p>
            <h id="caption"> Explore Products</h>
            <div id="addbutton"><Link id="studenthref" to="/shoppingcart">Go to Cart</Link> </div>
            <p></p>

            { 
            item.map((item) => (
            <div id="cardsetting">
              <div>
                <img src={require('../images/product4.jpg')} alt="chat" id="imgsize" />
              </div>
              <p> {item.pname} </p>
              <p> {item.p_description} </p>
              <p> Price: ${item.price} </p>
              
              <div id="cartbutton"><Link id="studenthref" onClick={() => AddRow(item.pname, item.price)}>Add to Cart</Link>
              </div>

            </div> 
            
            ))}
                
          </div>
        </section>            
            </div>
          </div>

            </div>

        );
}
export default ExploreProducts;