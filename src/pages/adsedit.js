import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function AdsEdit() {

  //   const [clubimage, setClubimage] = useState('')
  const [adname, setAdname] = useState('')
  const [ad_description, setAd_description] = useState('')
  const [website, setWebsite] = useState('')
  //   const [actor, setActor] = useState('')
  const [error, setError] = useState('')
  const [adv_id, setAdvId] = useState('');
  const [auth, setAuth] = useState('');
  const [username, setUser] = useState('');
  const [userdata, setUserData] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [university, setUniversity] = useState('');

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
    var product_id = localStorage.getItem('adv_id')

    var userdata = localStorage.getItem('email')
    var phone_number = localStorage.getItem('phone')
    var university = localStorage.getItem('university')
    setAuth(auth);
    setUser(username);
    setUserData(userdata);
    setPhoneNumber(phone_number);
    setUniversity(university);
    
    setAdvId(product_id);

  }, []);

  const registerHandle = async (e) => {
    e.preventDefault()
    let config = { method: "POST", adname: adname, ad_description: ad_description, website: website,adv_id:adv_id}

    try {
      const { data } = await axios
        .post('http://localhost/backendphp/adsedit.php', config)
        .then((response) => {
          //console.log(response.data)
          localStorage.removeItem('adv_id');
          navigate('/manageadvertisement')
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
                <h1 id="titletext">Edit Advertisement</h1>
                <hr />
                <div id="formgroupmain">
                  <div class="form-group-img">
                    <label id="login-input" for="">Advertisement Image</label>
                    <div id="display-image">    </div>

                    <input type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" />

                  </div>

                  <div class="form-group">
                    <label id="login-input" for="">Advertisement Name:</label>
                    <input type="text" class="form-control" pattern="[a-zA-Z ]+" onChange={(e) => setAdname(e.target.value)} required />
                  </div>

                  <div class="form-group">
                    <label id="login-input" for="">Advertisement Description:</label>
                    <input type="text" class="form-control" onChange={(e) => setAd_description(e.target.value)} required />
                  </div>

                  <div class="form-group">
                    <label id="login-input" for="">Website:</label>
                    <input type="text" class="form-control" onChange={(e) => setWebsite(e.target.value)} required />
                  </div>
                </div>
                <div id="btn-group">
                  <input type="submit" class="loginbutton" value="Update details" />
                </div>

              </div>
            </div>
          </form>
        </div>


      </div>
    </div>
  )
}

export default AdsEdit;