import React from 'react';

class SellProduct extends React.Component {
    render() {
        return (
            <div>
               <div id='body'>
               <div id="overall1">
    <a class="logo">
      <img id="logoimg" src={require('../images/logo.png')}  alt="logo" /></a>
    <ul id="navbar">
      <li><a href="studentprofile.html">Home</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="login">Logout</a></li>
    </ul>
  </div>

  
  
  <div id="service-div">
        
            
    <div class="cards_wrap">

<form action="sell_product" method="post">

<div id="card_inner">
<h1 id="titletext">WANT TO SELL YOUR PRODUCT?</h1>
        <hr/>
        <div id="formgroupmain">
          <div class="form-group-img">
            <label id="login-input" for="">Product Image</label>
            <link href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" rel="stylesheet"/>
      <div id="sellproductimage">
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" class="main-profile-img" />
        <i class="fa fa-edit"></i>
      </div>
        </div>
        <div class="form-group">
            <label id="login-input" for="">Product Name</label>
            <input  type="text" class="form-control" required/>
        </div>
        <div class="form-group">
            <label id="login-input" for="">Product Price</label>
            <input type="number" class="form-control" required/>
        </div>

        <div class="form-group">
          <label id="login-input" for="">Product Description</label>
          <input  type="text" class="form-control" required/>
      </div>
        <div class="form-group">
          <label id="login-input" for="">Seller Phone Number</label>
          <input  type="number" class="form-control" required/>
      </div>

      <div class="form-group">
        <label id="login-input" for="">Email ID:</label>
        <input  type="email" class="form-control" required/>
    </div>
      <div class="form-group">
        <label id="login-input" for="">Card Details</label>
        <input  type="number" class="form-control" required/>
    </div>
  </div>
  <div id="btn-group">
    <input type="button" id="loginbutton" value="Sell Now"/>
</div>
  
    </div>	
</form>
</div>


</div>
</div>
</div>
                
                );
    }
}
export default SellProduct;