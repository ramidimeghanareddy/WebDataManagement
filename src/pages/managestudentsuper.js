import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";


function ManageStudentSuper() {
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

      fetch("http://localhost/backendphp/managestudentsuper.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);
      });
    }, []);

  const deleteRow = async (email) => {
    let config = { method: "POST", email: email }

    axios.post('http://localhost/backendphp/managestudentsuperdelete.php', config)
      .then((response) => {
        // console.log(response.data)
        window.location.reload(true);

      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div id='body'>
      <div id="overall1">
        <a class="logo"> <img id="logoimg" src={require('../images/logo.png')} alt="logo" /></a>
        <ul id="navbar">


          <li><Link to="/superadmin">Home</Link></li>
          <li><Link to="http://mxr6880.uta.cloud/">Blog</Link></li>
          <li><Link to="/login" onClick={logout}>Logout</Link></li>
        </ul>
      </div>
      <div id="content">
        <div id="blockhead">
          <div id="mainblock">
            <div id="blockssidebar">
              <div class="profilemain">
                <link
                  href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
                  rel="stylesheet"
                />
                <div id="studentdiv">
                  <img src={require('../images/userimg.png')} class="main-profile-img" />
                  <i class="fa fa-edit"></i>
                </div>
                <p> </p>
                <p id="profile">{user}</p>
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
              <p id="caption">Manage Students</p>

              <table id="table_gap">
                <tr>
                  <th id="table_setting">Name</th>
                  <th id="table_setting">Email ID</th>
                  <th id="table_setting">Phone Number</th>
                  <th id="table_setting">University</th>
                  <th id="table_setting2">Edit</th>
                  <th id="table_setting2">Delete</th>
                  <th id="table_setting2">Chat</th>
                </tr>
                {item.map((item) => (
                  <tr key={item.id}>
                    <td id="table_data">{item.username}</td>
                    <td id="table_data">{item.email}</td>
                    <td id="table_data">{item.phone_number}</td>
                    <td id="table_data">{item.university}</td>
                    <td id="table_setting3"> <a ><img src={require('../images/edit_symbol.png')} alt="edit" id="msimgs" /></a> </td>
                    <td id="table_setting3"> <a ><img src={require('../images/delete.png')} onClick={() => deleteRow(item.email)} alt="delete" id="msimgs" /></a>  </td>
                    <td id="table_setting3"> <a><img src={require('../images/chat.png')} alt="chat" id="msimgs" /></a>  </td>
                  </tr>
                ))}


              </table>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ManageStudentSuper;