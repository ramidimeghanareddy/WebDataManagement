import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";
import EmailContext from "../components/EmailContext";import axios from "axios";

function ModerateClubs(){
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
      fetch("http://localhost/backendphp/moderateclubs.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);
      });
      fetch("http://localhost/backendphp/schooladmin.php")
      .then((res) => res.json())
      .then((result) => {
        setValue(result);
        // console.log(result[1]["username"]);
        // setItem
      });
  }, []);

  const deleteRow = async (clubname) => {
    let config = { method: "POST", clubname: clubname }

    axios.post('http://localhost/backendphp/exploreclubsdelete.php', config)
      .then((response) => {
        // console.log(response.data)
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  return (
            <div>
              <div id='body'>
              <div id="overall1">
      <a class="logo">
        <img id="logoimg" src={require('../images/logo.png')}  alt="logo"/></a>
        <ul id="navbar">


<li><Link to="/schooladmin">Home</Link></li>
<li><Link to="http://mxr6880.uta.cloud/">Blog</Link></li>
<li><Link to="/login" onClick={logout}>Logout</Link></li>
</ul>
     </div>
    <div id="mod_posts">
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
       <div id="wholemiddlemain">   
     
     <p id="caption">Moderate Clubs</p>
     <div id="addbutton"><Link id="studenthref" to="/addclubs">Add Club</Link> </div>
            <p></p>
     <p id="caption1"> Clubs... </p>
     
     <div id="service-div">
      <div class="cards_wrap">
        <div>

          { 
            item.map((item) => (
            <div id="cardsettingclubs">
            <div id="imagebox">
              <img src={require('../images/club1.png')} alt="chat" id="imgsizeclub"/>
            </div>
              <p id="exploreproduct_detailsbold"> Club name: {item.clubname} </p>
              <p id="exploreproduct_details"> Club Head: {item.student_manager} </p>
              <p id="exploreproduct_details"> Website:{item.website} </p>
              <div id="commonbuttonsmall">
                <div> <Link id="commonsmallheight2" to="/clubedit">Edit</Link> </div>
                <p> </p>
                <Link><button id="commonsmallheight" onClick={() => deleteRow(item.clubname)} alt="delete"> Delete </button></Link>
              </div>
            </div> 
            
            ))}
     
           
        </div>
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
export default ModerateClubs;