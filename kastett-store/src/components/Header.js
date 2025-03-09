import React, { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Обработчик клика вне меню
    useEffect(() => {
        const handleClickOutside = (event) => {
            const menu = document.querySelector('.mobile-menu');
            const button = document.getElementById('header_menu');
            if (!menu || !button) return;
            if (!menu.contains(event.target) && !button.contains(event.target)) {
                closeMenu();
        }};

        document.addEventListener('mousedown', handleClickOutside);
        return () => {document.removeEventListener('mousedown', handleClickOutside);};
    }, []);

        // Вычисляем общее количество товаров в корзине
        const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="header center">
            <div className="left">
                <Link to="/"><img src='../img/logo_1.svg' alt="logo" width="40px" /></Link>
                <Link to="/"><img src='../img/find_1.svg' alt="find" width="26px" /></Link>
            </div>
            <div className="right">
                <label id="header_menu" onClick={toggleMenu}>
                    <img src='../img/menu_1.svg' alt="menu" width="30px" />
                </label>
                <Link to="/registration"><img className="centr hidden" src='../img/user_1.svg' alt="user" width="30px" /></Link>
                <Link to="/cart">
                    <div style={{ position: 'relative' }}>
                        <img className="basket hidden" src='../img/basket_1.svg' alt="basket" width="30px" />
                        {totalItemsInCart > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-5px',
                                right: '-10px',
                                backgroundColor: 'red',
                                color: 'white',
                                borderRadius: '50%',
                                padding: '2px 5px',
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}>
                                {totalItemsInCart}
                            </span>
                        )}
                    </div>
                </Link>
                {isMenuOpen && <MobileMenu closeMenu={closeMenu} className={isMenuOpen ? 'open' : ''} />}
            </div>
        </div>
    );
};

export default Header;
