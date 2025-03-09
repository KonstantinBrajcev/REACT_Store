
import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {

return (
<div>
  <div className="background_tovar center">
    <div className="top_tovar">REGISTRATION</div>
  </div>

  <div className="registration center">
    <div className="registration_left">
      <div className="registration_top">
        Your Name<br/>
        <input type="text" className="input"/>
        <input type="text" className="input"/><br/>
        <input type="radio" name="male"/>Male
        <input type="radio" name="male"/>Female<br/>
      </div>
      <div className="registration_bottom">
        <br/>Login details<br/>
        <input type="text" className="input"/>
        <input type="text" className="input"/>
      </div>
      <div className="registration_litle">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</div>
        <Link to="/"><button className="button_join">JOIN NOW</button></Link>
      </div>
      <div className="registration_right">LOYALTY HAS ITS PERKS<br/>
        <br/>Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:<br/>
        <br/>
        <ul className="checklist">
          <li>15% off welcome offer</li>
          <li>Free shipping, returns and exchanges on all orders</li>
          <li>$10 off a purchase on your birthday</li>
          <li>Early access to products</li>
          <li>Exclusive offers & rewards</li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Registration;