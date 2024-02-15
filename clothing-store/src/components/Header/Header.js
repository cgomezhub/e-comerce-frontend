import React, { useState } from "react"; // Importa useState

import happyHome from "../../images/happy_home.svg";
import shoppCart from "../../images/shop_cart.svg";
import settings from "../../images/settings.svg";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header({ isLoggedIn, userImage, onLogout }) {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = (event) => {
    event.preventDefault();
    onLogout(); // Llama a onLogout sin pasar el evento
  };

  return (
    <header className="header">
      <Link to="/">
        <img src={happyHome} alt="logo ToHome" className="header__logo" />
      </Link>
      <div className="header__container">
        <Link to="/cart">
          <img src={shoppCart} alt="shopping cart" className="header__cart" />
        </Link>
        <div className="header__dropdown">
          <img
            src={settings}
            alt="user"
            onClick={() => setIsOpen(!isOpen)}
            className="header__settings"
          />
          {isOpen && (
            <div className="header__dropdown-content">
              <ul>
                <li className="dropdown-item">
                  <Link to="/order-history">Historial de ordenes</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/profile">Perfil</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/admin-console">Consola de administracion</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/logout">Logout</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
