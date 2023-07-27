import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function ProductEdit() {

  //   const [postimage, setPostimage] = useState('')
  const [pname, setPname] = useState('')
  const [p_description, setP_description] = useState('')
  const [price, setPrice] = useState('')
  // const [actor, setActor] = useState('')
  const [error, setError] = useState('')

  const [item, setItem] = useState([]);
  const [auth, setAuth] = useState('');
  const [username, setUser] = useState('');
  const [userdata, setUserData] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [university, setUniversity] = useState('');
  
  const [product_id, setProd] = useState('');

  const navigate = useNavigate()
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
    var product_id = localStorage.getItem('product_id')

    var userdata = localStorage.getItem('email')
    var phone_number = localStorage.getItem('phone')
    var university = localStorage.getItem('university')
    setAuth(auth);
    setUser(username);
    setUserData(userdata);
    setPhoneNumber(phone_number);
    setUniversity(university);
    
    setProd(product_id);


    fetch("http://localhost/backendphp/producteditfetch.php")
        .then((res) => res.json())
        .then((result) => {
          setItem(result);
          console.log(result);
        });
  }, []);
 
  const registerHandle = async (e) => {
    e.preventDefault()
    let config = { method: "POST", pname: pname, p_description: p_description, price: price,p_id:product_id }

    try {
      const { data } = await axios
        .post('http://localhost/backendphp/productedit.php', config)
        .then((response) => {
          //console.log(response.data)
          localStorage.removeItem('product_id');
          navigate('/manageproducts')
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

  return (

    <div>
      <div id="overall1">
        <a class="logo">
          <img id="logoimg" src={require('../images/logo.png')} alt="logo" /></a>
        <ul id="navbar">


          <li><Link to="/businessowner">Home</Link></li>
          <li><Link to="http://mxr6880.uta.cloud/">Blog</Link></li>
          <li><Link to="/login" onClick={logout}>Logout</Link></li>
        </ul>
      </div>



      <div id="service-div">


        <div class="cards_wrap">

          <form onSubmit={registerHandle} method='post'>
            <div id="card_item">
              <div id="card_inner">
                <h1 id="titletext">Edit Details</h1>
                <hr />
                <div id="formgroupmain">
                  <div class="form-group-img">
                    <label id="login-input" for="">Product Image</label>
                    <link href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" rel="stylesheet" />


                    <div id="display-image">    </div>

                    <input type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" />

                  </div>
                </div>

                <div class="form-group">
                  <label id="login-input" for="">Product Name:</label>
                  <input type="text" class="form-control" pattern="[a-zA-Z ]+" onChange={(e) => setPname(e.target.value)} required />
                </div>

                <div class="form-group">
                  <label id="login-input" for="">Product Description:</label>
                  <input type="text" class="form-control" onChange={(e) => setP_description(e.target.value)} required />
                </div>

                <div class="form-group">
                  <label id="login-input" for="">Price:</label>
                  <input type="text" class="form-control" onChange={(e) => setPrice(e.target.value)} required />
                </div>

                <div id="btn-group">
                <input type="submit" class="loginbutton" value="Update Details" />
              </div>
              </div>


            </div>
          </form>
        </div>


      </div>
    </div>
  )
}
export default ProductEdit;