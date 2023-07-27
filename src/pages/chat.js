import React from 'react';

class Chat extends React.Component {
    render() {
        return (
            <div>
                 <div id="overall1">
    <a class="logo">
      <img id="logoimg" src="static/logo.png" alt="logo" /></a>
    <ul id="navbar">
      <li><a href="home.html">Home</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact Us</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="login">Sign In</a></li>
      <li><a href="signup.html">Register</a></li>
    </ul>
  </div>

  <div id="chat_container_chat">
    <div id="chat_box_chat">
      <div id="top-bar_chat">
        <div id="name_chat">John</div>
      </div>
      <div id="middle_chat">
        <div id="student">
          <div id="incoming_chat">
            <div id="in_b1_chat">Hey, sup?.</div>
          </div>
          <div id="outgoing_chat">
            <div id="out_b2_chat">Hello!</div>
          </div>
        </div>
      </div>
          <div id="bottom-bar_chat">
            <div id="chat_box_chat">
              <input type="text" placeholder="Type a message..." />
              <button type="submit"><i >Send</i></button>
            </div>
          </div>
    </div>
</div>
            </div>

        );
    }
}
export default Chat;