import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({id, image, title, description, price, size, color, addToCart }) => {
  const navigate = useNavigate();
  const product = { id, image, title, description, price, size, color };

  const handleViewProduct = () => {
    // Передаем данные о товаре через состояние
    navigate('/product', { state: { product } });
  };

  return (
    <div className="item">
      <img className="imq" src={image} width="360px" alt={title} />
      <div className="content">
        <a className="product_heading" onClick={handleViewProduct}>{title}</a>
        <p className="product_text">{description}</p>
        <p className="product_price">${price}</p>
      </div>
      <button className="product_add" onClick={() => addToCart(product)}>
        <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.9509 23.2667H21.8386C21.2294 23.2667 20.7177 22.7671 20.6735 22.1294C20.629 21.4607 21.1175 20.8785 21.7626 20.8346C21.788 20.8329 21.8145 20.832 21.8405 20.832C22.4575 20.832 22.9743 21.3219 23.0201 21.9487C23.0319 22.1971 22.9914 22.5514 22.736 22.8439L22.73 22.8507L22.7242 22.8575C22.5275 23.0912 22.2607 23.2321 21.9509 23.2667ZM8.21887 23.2604C7.5683 23.2604 7.03906 22.7174 7.03906 22.05C7.03906 21.3832 7.5683 20.8406 8.21887 20.8406C8.86945 20.8406 9.39868 21.3832 9.39868 22.05C9.39868 22.7174 8.86945 23.2604 8.21887 23.2604Z" fill="white"></path>
        </svg>
        Add to Cart
      </button>
    </div>
  );
};
export default Product;