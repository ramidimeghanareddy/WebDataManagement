import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext"
import axios from "axios";


function PostEditStudent() {
  const navigate = useNavigate();
    
    const [item, setItem] = useState([]);
    const [auth, setAuth] = useState('');
    const [user, setUser] = useState('');
    const [userdata, setUserData] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [university, setUniversity] = useState('');
    const { value, setValue } = useContext(UserContext);

    //   const [postimage, setpostimage] = useState('')

  const [postname, setPostname] = useState('')
  const [student_manager, setStudent_manager] = useState('')
  const [post_description, setPost_description] = useState('')
  const [contact_number, setContact_number] = useState('')
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('')
//   const [actor, setActor] = useState('')
  const [error, setError] = useState('')

  const registerHandle = async (e) => {
    e.preventDefault()
    let config = { method: "POST", postname:postname,
     student_manager:student_manager, post_description:post_description, 
     contact_number:contact_number, email:email, website:website}

    try {
      const { data } = await axios
        .post('http://localhost/backendphp/postedit.php', config)
        .then((response) => {
          //console.log(response.data)
          navigate('/exploreposts')
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


<li><Link to="/studentprofile">Home</Link></li>
<li><Link to="http://mxr6880.uta.cloud/">Blog</Link></li>
<li><Link to="/login" onClick={logout}>Logout</Link></li>
</ul>
    </div>



    <div id="service-div">


        <div class="cards_wrap">

        <form onSubmit={registerHandle} method='post'>
                <div id="card_item">
                    <div id="card_inner">
                        <h1 id="titletext">EDIT POST</h1>
                        <hr />
                        <div id="formgroupmain">
                        <label id="login-input" for="">Post Image:</label>
                        <div id="display-image">    </div>

<input type="file" id="image-input" accept="image/jpeg, image/png, image/jpg"/>

                         <p></p>
                            
                            <div class="form-group">
                                <label id="login-input" for="">Post Name:</label>
                                <input type="text" class="form-control" pattern="[a-zA-Z ]+" onChange={(e) => setPostname(e.target.value)} required/>
                            </div>

                            <div class="form-group">
                                <label id="login-input" for="">Student Manager:</label>
                                <input type="text" class="form-control" pattern="[a-zA-Z ]+" onChange={(e) => setStudent_manager(e.target.value)} required/>
                            </div>

                            <div class="form-group">
                                <label id="login-input" for="">Post Description:</label>
                                <input type="text" class="form-control" onChange={(e) => setPost_description(e.target.value)} required/>
                            </div>
                            <div class="form-group">
                                <label id="login-input" for="">Contact Number:</label>
                                <input type="number" class="form-control" onChange={(e) => setContact_number(e.target.value)} required/>
                            </div>

                            <div class="form-group">
                                <label id="login-input" for="">Email ID:</label>
                                <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} required/>
                            </div>

                            <div class="form-group">
                                <label id="login-input" for="">Website:</label>
                                <input type="text" class="form-control" onChange={(e) => setWebsite(e.target.value)} required/>
                            </div>
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
export default PostEditStudent;