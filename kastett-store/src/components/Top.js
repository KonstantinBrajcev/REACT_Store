import React from 'react';

const Top = () => {
  return (
<div>
  <div className="background">
    <div className="top_img hidden">
      <img src='../img/Layer_57-removebg-preview.png' alt="товар1"/>
    </div>
    <div className="top_text">
      <div className="box">
        <h1 className="top_title">THE BRAND</h1>
        <h2 className="top_heading">OF LUXERIOUS <span>FASHION</span></h2>
      </div>
    </div>
  </div>
<div className="offer center">
  <div className="block">
    <img src='../img/for_women.png' className="darken" alt="for women" width="360px"/>
    <div className="sale_content">
        <p className="sale_text">30% OFF</p>
        <h3 className="sale_heading">FOR WOMEN</h3>
    </div>
  </div>
  <div className="block">
    <img src='../img/for_men.png' className="darken" alt="for_men" width="360px"/>
    <div className="sale_content">
        <p className="sale_text">30% OFF</p>
        <h3 className="sale_heading">FOR MEN</h3>
    </div>
  </div>
  <div className="block">
    <img src='../img/for_kids.png' className="darken" alt="For_kids" width="360px"/>
    <div className="sale_content">
        <p className="sale_text">30% OFF</p>
        <h3 className="sale_heading">FOR KIDS</h3>
    </div>
  </div>
  <div className="block block_big">
    <img src='../img/accesories.png' className="darken" alt="accesories"/>
    <div className="sale_content">
        <p className="sale_text">30% OFF</p>
        <h3 className="sale_heading">ACCESORIES</h3>
    </div>
  </div>
</div>
</div>
)};
export default Top;