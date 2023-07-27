import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";
import axios from "axios";

function ShoppingCart() {
  const navigate = useNavigate();
    
    const [item, setItem] = useState([]);
    const [auth, setAuth] = useState('');
    const [user, setUser] = useState('');
    const [userdata, setUserData] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [university, setUniversity] = useState('');
    const { value, setValue } = useContext(UserContext);
    const [item1, setItem1] = useState([]);


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

      fetch("http://localhost/backendphp/shoppingcart.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);
      });

      fetch("http://localhost/backendphp/cart_total.php")
      .then((res) => res.text())
      .then((resu) => {
        setItem1(resu);
        // alert(resu[2]);
        console.log(resu);
        // alert(result);
      });
      }, []);

  const deleteRow = async (pname) => {
    let config = { method: "POST", pname: pname }

    axios.post('http://localhost/backendphp/cartdelete.php', config)
      .then((response) => {
        // console.log(response.data)
        alert("Item deleted from cart");
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
            <img id="logoimg" src={require('../images/logo.png')} alt="logo" /></a>
          <ul id="navbar">
            <li><Link to="/studentprofile">Home</Link></li>
            <li><Link to="http://mxr6880.uta.cloud/">Blog</Link></li>
            <li><Link to="/login" onClick={logout}>Logout</Link></li>
          </ul>
        </div>
        <div id="service-div">


          <div class="cards_wrap">
            <h id="caption">Shopping Cart</h>


            <table id="table_gap">
            {item.map((item) => (
             <tr key={item.id}>
             
              <tr id="tablerow">
                <td id="cart_data1"> <a><img src={require('../images/product3.jpg')} id="imgsize" /></a> </td>
                <td id="cart_data1"><p>Item: {item.pname} </p> <p>Price : ${item.price} </p></td>
                <td id="cart_data1"><p>Subtotal: ${item.price} </p> <div id="cartbutton" />  </td>
                <td><Link><img src={require('../images/delete.png')} onClick={() => deleteRow(item.pname)} alt="delete" id="msimgs" /></Link>
                </td>
              </tr>
              </tr>
              ))}
              <p></p>
              <p></p>

              <tr id="tablerow">
                <td ></td>
                <td id="cart_data2"> <p> {item1} </p>  <div id="btn-group">

                  <div id="btn-group-cart">
                    <Link id="studenthref" to="/checkout">Checkout</Link>

                  </div>
                </div>
                </td>
                <td ></td>
              </tr>
              
            </table>
          </div>
        </div>
      </div>

    </div>

  );
}
export default ShoppingCart;