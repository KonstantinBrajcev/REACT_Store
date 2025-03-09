import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ closeMenu }) => {
    return (
        <div className={`mobile-menu`}>
            <div className="mobile-menu__box">
                <div className="mobile-menu__item">
                    <Link to="/catalog" className="mobile-menu__title" onClick={closeMenu}>MAN</Link>
                    <ul className="mobile-menu__list">
                        <li><Link className="mobile-menu__link" to="/catalog" onClick={closeMenu}>Accessories</Link></li>
                        <li><Link className="mobile-menu__link" to="/catalog" onClick={closeMenu}>Bags</Link></li>
                        <li><Link className="mobile-menu__link" to="/catalog" onClick={closeMenu}>Denim</Link></li>
                        <li><Link className="mobile-menu__link" to="/catalog" onClick={closeMenu}>T-Shirts</Link></li>
                        <li><Link className="mobile-menu__link" to="/catalog" onClick={closeMenu}>Wears</Link></li>
                    </ul>
                </div>

                <div className="mobile-menu__item">
                    <Link to="/catalog" className="mobile-menu__title" onClick={closeMenu}>WOMAN</Link>
                    <ul className="mobile-menu__list">
                        <li><Link className="mobile-menu__link" to="/catalog" onClick={closeMenu}>Accessories</Link></li>
                        <li><Link className="mobile-menu__link" to="/catalog" onClick={closeMenu}>Bags</Link></li>
                        <li><Link className="mobile-menu__link" to="/catalog" onClick={closeMenu}>Denim</Link></li>
                        <li><Link className="mobile-menu__link" to="/catalog" onClick={closeMenu}>T-Shirts</Link></li>
                    </ul>
                </div>

                <div className="mobile-menu__item">
                    <Link to="/catalog" className="mobile-menu__title" onClick={closeMenu}>KIDS</Link>
                    <ul className="mobile-menu__list">
                        <li><Link className="mobile-menu__link" to="/catalog" onClick={closeMenu}>Accessories</Link></li>
                        <li><Link className="mobile-menu__link" to="/catalog" onClick={closeMenu}>Bags</Link></li>
                        <li><Link className="mobile-menu__link" to="/catalog" onClick={closeMenu}>Denim</Link></li>
                        <li><Link className="mobile-menu__link" to="/catalog" onClick={closeMenu}>T-Shirts</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
