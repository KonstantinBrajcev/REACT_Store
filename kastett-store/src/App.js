import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Feature from './components/Feature';
import Top from './components/Top';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Registration from './components/Registration';
import Catalog from './components/Catalog';
import Face from './components/Face';
import ProductItem from './components/ProductItem';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    // Функция для добавления товара в корзину
    const addToCart = (product) => {
        setCartItems((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
      };

      const updateQuantity = (id, quantity) => {
        setCartItems((prevCart) => 
          prevCart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          )
        );
      };  

    const [filters, setFilters] = useState({ sizes: [], priceRange: [] });

    const updateFilters = (newFilters) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            ...newFilters
        }));
    };

    return (
        <Router>
            <Header cartItems={cartItems} />
            <Routes>
                <Route path="/" 
                    element={<>
                            <Top />
                            <ProductList filters={filters} showPagination={false} addToCart={addToCart}/>
                            <Feature />
                            </>} 
                />
                <Route path="/catalog" 
                    element={<>
                            <Catalog addToCart={addToCart}/>
                            <Feature />
                            </>} 
                />
                <Route path="/cart" 
                    element={<>
                            <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} setCartItems={setCartItems} />
                            </>} 
                />
                <Route path="/registration" 
                    element={<>
                            <Registration />
                            </>} 
                />
                <Route path="/product" 
                    element={<>
                            <ProductItem addToCart={addToCart} />
                            </>} 
                />
            </Routes>
        <Face />
        </Router>
    );
};

export default App;