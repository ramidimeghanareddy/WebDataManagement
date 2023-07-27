import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";
import axios from "axios";


function PostAdvertisements() {
  const navigate = useNavigate();
    
    const [item, setItem] = useState([]);
    const [auth, setAuth] = useState('');
    const [user, setUser] = useState('');
    const [userdata, setUserData] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [university, setUniversity] = useState('');
    const { value, setValue } = useContext(UserContext);

    //   const [clubimage, setClubimage] = useState('')
  const [adname, setAdname] = useState('')
  const [ad_description, setAd_description] = useState('')
  const [website, setWebsite] = useState('')
//   const [actor, setActor] = useState('')
  const [error, setError] = useState('')

  const registerHandle = async (e) => {
    e.preventDefault()
    let config = { method: "POST", adname:adname,ad_description:ad_description, website:website}

    try {
      const { data } = await axios
        .post('http://localhost/backendphp/addads.php', config)
        .then((response) => {
          //console.log(response.data)
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
      }, []);
  return(

    <div>
    <div id="overall1">
        <a class="logo">
            <img id="logoimg" src={require('../images/logo.png')}  alt="logo" /></a>
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
                        <h1 id="titletext">WANT TO CREATE A NEW ADVERTISEMENT??</h1>
                        <hr />
                        <div id="formgroupmain">
                            <div class="form-group-img">
                                <label id="login-input" for="">Advertisement Image</label>
                                <link href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" rel="stylesheet" />
                                <div id="sellproductimage">
                                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" class="main-profile-img" />
                                    <i class="fa fa-edit"></i>
                                </div>
                            </div>
                           
                            <div class="form-group">
                                <label id="login-input" for="">Advertisement Name:</label>
                                <input type="text" class="form-control" pattern="[a-zA-Z ]+" onChange={(e) => setAdname(e.target.value)} required/>
                            </div>

                            <div class="form-group">
                                <label id="login-input" for="">Advertisement Description:</label>
                                <input type="text" class="form-control" onChange={(e) => setAd_description(e.target.value)} required/>
                            </div>

                            <div class="form-group">
                                <label id="login-input" for="">Website:</label>
                                <input type="text" class="form-control" onChange={(e) => setWebsite(e.target.value)} required/>
                            </div>
                        </div>
                        <div id="btn-group">
                            <input type="submit" class="loginbutton" value="Create Now" />
                        </div>

                    </div>
                </div>
            </form>
        </div>


    </div>
    </div>
  )
}

export default PostAdvertisements;