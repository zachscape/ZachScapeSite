import React, { Component } from "react";
import twitter from "../../images/twitter.ico";
import youtube from "../../images/youtube.ico";
import twitch from "../../images/twitch.ico";
import "./Email.css";

export default class Email extends Component {
  render() {
    return (
      
<div className="email-container">
  <h1>Stay Updated</h1>
  <div className="email-form-container">
    <form className="email-form" action="http://localhost:3000/api/contact" method="POST">
      <input type="email" name="email" placeholder="Enter your email" required />
      <input type="submit" value="Subscribe" />
    </form>
  </div>
        <div className="social-links-container">
  <div className="social-link twitter-link">
    <a href="https://twitter.com/yourhandle">
      <img src={twitter} alt="Twitter icon" />
     
    </a>
  </div>
  <div className="social-link youtube-link">
    <a href="https://www.youtube.com/yourchannel">
      <img src={youtube} alt="YouTube icon" />
    
    </a>
  </div>
  <div className="social-link twitch-link">
    <a href="https://www.twitch.tv/yourhandle">
      <img src={twitch} alt="Twitch icon" />

    </a>
  </div>
</div>
      </div>
    );
  }
}
