import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";
import EmailContext from "../components/EmailContext";


function ManageProducts() {
  const { emailLogin, setEmailLogin } = useContext(EmailContext)
  const [item, setItem] = useState([]);
  const [auth, setAuth] = useState('');
  const [username, setUser] = useState('');
  const [userdata, setUserData] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [university, setUniversity] = useState('');

  const deleteRow = async (pname) => {
    let config = { method: "POST", pname: pname }

    axios.post('http://localhost/backendphp/manageproductsdelete.php', config)
      .then((response) => {
        // console.log(response.data)
        alert("product deleted successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
      })
  }


  const editProductID = (p_id) => {
    window.localStorage.setItem('product_id',p_id)

  }

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
    // let config = {method:"GET"}
    // let emailLogi=userdata;
    const options = { method: 'GET', email: userdata };
    fetch("http://localhost/backendphp/manageproducts.php/?email=" + userdata, options)
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);
        // alert(result)
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <div id='body'>
        <div id="overallsuper">
          <a class="logo"> <img id="logoimg" src={require('../images/logo.png')} alt="logo" /></a>
          <ul id="navbar">


            <li><Link to="/businessowner">Home</Link></li>
            <li><Link to="http://mxr6880.uta.cloud/">Blog</Link></li>
            <li><Link to="/login" onClick={logout}>Logout</Link></li>
          </ul>

        </div>
        <div id="mod_posts">
          <div id="mainblock">
            <div id="blockssidebar">
              <div class="profilemain">
                <link
                  href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
                  rel="stylesheet"
                />
                <div id="studentdivstarbucks">
                  <img src={require('../images/startbucks.png')} class="main-profile-img" />
                  <i class="fa fa-edit"></i>
                </div>
                <p>{username}</p>
                <p id="details">{userdata}</p>
                <p id="details">{phone_number}</p>
                <p id="details">{university}</p>
                <div id="btn-group">
                  <input type="button" class="loginbutton" value="Edit Profile" />
                </div>
                <br />
              </div>
            </div>
            <section id="middleblock">
              <div id="wholemiddlemain">
                <p></p>
                <h id="caption"> Manage Products</h>
                <div id="addbutton"><Link id="studenthref" to="/addproducts">Add Products</Link> </div>
                <p></p>

                {
                  item.map((item) => (
                    <div id="cardsetting">
                      <div>
                        <img src={require('../images/product4.jpg')} alt="chat" id="imgsize" />
                      </div>
                      <p> {item.pname} </p>
                      <p> {item.p_description} </p>
                      <p> {item.price} </p>
                      <div id="commonbuttonsmall">
                        <div> <Link id="commonsmallheight2" to="/productedit" onClick={() => editProductID(item.p_id)}>Edit</Link> </div>
                        <p> </p>
                        <Link><button id="commonsmallheight" onClick={() => deleteRow(item.pname)} alt="delete"> Delete </button></Link>
                      </div>
                    </div>

                  ))}

              </div>
            </section>
          </div>
        </div>
      </div>

    </div>

  );

}
export default ManageProducts;