import React, { Component } from "react";
import twitter from "../../images/twitter.ico";
import youtube from "../../images/youtube.ico";
import paypal from "../../images/paypal.ico";
import twitch from "../../images/twitch.ico";
import "./Email.css";

export default class Email extends Component {
  render() {
    return (
      
<div className="email-container">
  <h1>Be the first to know about updates and releases</h1>
  <div className="email-form-container">
    <form className="email-form" action="http://localhost:3000/api/contact" method="POST">
      <input type="email" name="email" placeholder="Email" required />
      <input type="submit" value="Subscribe" />
    </form>
  </div>
        <div className="social-links-container">
  <div className="social-link twitter-link">
    <a href="https://twitter.com/zach_scape">
      <img src={twitter} alt="Twitter icon" />
     
    </a>
  </div>
  <div className="social-link youtube-link">
    <a href="https://www.youtube.com/@zachscape_">
      <img src={youtube} alt="YouTube icon" />
    
    </a>
  </div>
  <div className="social-link twitch-link">
    <a href="https://www.twitch.tv/zachscape">
      <img src={twitch} alt="Twitch icon" />
    </a>
  </div>
</div>
<h1>Contribute directly to help speed up progress</h1>
<div className="social-link paypal-link">
    <a href="https://streamlabs.com/sl_id_54fd8cdb-b462-3ae9-9eaf-6b2d6f8dc522/tip">
      <img src={paypal} alt="Paypal icon" />
    </a>
  </div>
      </div>
    );
  }
}
