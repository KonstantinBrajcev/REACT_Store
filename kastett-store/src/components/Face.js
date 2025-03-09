import React from 'react';

const Face = () => {
  return (
<div>
  <div className="face center">
        <div className="foto">
            <div>
              <img className="bottom_face" src='../img/Face_1.png' alt="Face" />
            </div>
            <p className="face_text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
        </div>
        <div className="subscribe">
            <p><span>SUBSCRIBE</span><br/>FOR OUR NEWLETTER AND PROMOTION</p>
            <form className="subscription-form">
                <input type="email" id="email" name="email" placeholder="Enter Your Email" />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </div>
    <div className="copyright center">
        <p className="inside">© 2022 Brand All Rights Reserved.</p>
        <div className="social">
            <article className="icon"><img className="icon2" src='../img/facebook.svg' alt="#"/></article>
            <article className="icon"><img className="icon2" src='../img/Instagram.svg' alt="#"/></article>
            <article className="icon"><img className="icon2" src='../img/Pinacle.svg' alt="#"/></article>
            <article className="icon"><img className="icon2" src='../img/Twiter.svg' alt="#"/></article>
        </div>
    </div>
</div>
)
};
export default Face;