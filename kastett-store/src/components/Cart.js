import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, updateQuantity, setCartItems }) => {
    // Состояние для хранения количества товаров
    const [quantities, setQuantities] = useState({});

    // Обновляем состояния количества при изменении cartItems
    useEffect(() => {
        const initialQuantities = {};
        cartItems.forEach(item => {
            initialQuantities[item.id] = item.quantity;
        });
        setQuantities(initialQuantities);
        // console.log("Cart items updated:", cartItems); // Логирование для отладки
    }, [cartItems]);

    // Функция для изменения количества
    const handleQuantityChange = (item, quantity) => {
        if (quantity < 1) return; // Не допускаем отрицательные значения
        setQuantities((prev) => ({ ...prev, [item.id]: quantity }));
        updateQuantity(item.id, quantity);
    };

    // Функция для подсчета общей стоимости
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + item.price * (quantities[item.id] || item.quantity);
        }, 0);
    };

    const total = calculateTotal();

    return (
        <div className="cart center">
            <div className="cart_left">
                {cartItems.length === 0 ? (
                    <p>Корзина пуста</p>
                ) : (
                    cartItems.map((item) => (
                        <div className="wear" key={item.id}>
                            <div className="cart_img">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="wear_content">
                                <div>{item.title}</div>
                                <p>Price: <span style={{ color: '#F16D7F' }}>${item.price}</span></p>
                                <p>Color: {item.color ? item.color : "Не указано"}</p>
                                <p>Size: {item.size ? item.size : "Не указано"}</p>
                                <p>Quantity: <input
                                        type="number"
                                        value={quantities[item.id] || item.quantity}
                                        onChange={(e) => handleQuantityChange(item, Number(e.target.value))}
                                        min="1" style={{width: '44px', marginLeft: '10px'}}
                                            />
                                </p>
                            </div>
                            <a onClick={() => removeFromCart(item.id)}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757" />
                                </svg>
                            </a>
                        </div>
                    ))
                )}
                <div className="cart_button">
                    <button className="button_cart" onClick={() => setCartItems([])}>CLEAR SHOPPING CART</button>
                    <Link to="/catalog"><button className="button_cart">CONTINUE SHOPPING</button></Link>
                </div>
            </div>
            <div className="cart_right">
                <div className="adress">
                    <p>SHIPPING ADDRESS</p>
                    <input type="text" name="address" />
                    <input type="text" name="address" />
                    <input type="text" name="address" /><br />
                    <button className="button_cart" style={{ width: '110px' }}>GET A QUOTE</button>
                </div>
                <div className="cart_total">
                    <p className="total_sub">SUB TOTAL: <span>${total.toFixed(2)}</span></p>
                    <p className="total_grand">GRAND TOTAL: <span>${total.toFixed(2)}</span></p>
                    <hr className="divider_bot" />
                    <div className="butt">
                        <button className="button_check">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
