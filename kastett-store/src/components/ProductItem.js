import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductList from "./ProductList";
import { Link } from 'react-router-dom';

const ProductItem = ({ addToCart }) => {
  const location = useLocation();
  const { product } = location.state || {}; // Получаем данные о товаре из состояния

  const [itemsPerRow, setItemsPerRow] = useState(3); // Начальное значение

  useEffect(() => {
    const updateItemsPerRow = () => {
      const containerWidth = document.querySelector(".products")?.offsetWidth || 0;
      const itemWidth = 400; // Примерная ширина товара
      const newLimit = Math.floor(containerWidth / itemWidth);
      setItemsPerRow(newLimit || 1); // Минимум 1 товар
    };

    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);
    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);

  return (
 <div>
   <div className="background_tovar center">
     <div className="top_tovar">NEW ARRIVALS</div>
     <div className="home_tovar">HOME / MEN / <span className="home_tovar">NEW ARRIVALS</span></div>
   </div>
   <div className="image_swap">

     <a href="">
       <div className="arrow">
         <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z" fill="black"/>
         </svg>
       </div>
     </a>

     <img className="product_item" src={product?.image} alt={product?.title}/>

     <a href="">
       <div className="arrow">
         <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M0.299805 19.2499L8.0498 11.4999L0.299805 3.7499L1.8498 0.649902L12.6998 11.4999L1.8498 22.3499L0.299805 19.2499Z" fill="black"/>
         </svg>
      </div>
     </a>

   </div>
   <div className="tovar">
     <p className="product_heading">WOMEN COLLECTION</p>
     <hr className="divider_top"/>
     <p className="product_heading"><span>{product?.title}</span></p>
     <p className="product_text_tovar">{product?.description}</p>
     <p className="product_price">${product?.price}</p>
     <hr className="divider_bot"/>
     <div className="choose">
     <div className="choose_inside">
       <a>CHOOSE COLOR
         <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z" fill="#6F6E6E"/>
         </svg>
       </a>
     </div>
     <div className="choose_inside">
         <a>CHOOSE SIZE<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z" fill="#6F6E6E"/>
         </svg>  
         </a>
     </div>
     <div className="choose_inside">
         <a>QUANTITY<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z" fill="#6F6E6E"/>
         </svg>
         </a>
     </div>
   </div>
   <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
 </div>


      <div className="products">
        <ProductList limit={itemsPerRow} maxRows={1} showPagination={false} addToCart={addToCart}/>
        <Link to="/catalog">
          <button className="button">Browse All Products</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
