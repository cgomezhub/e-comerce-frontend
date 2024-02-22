import React, { useState } from "react"; // Importa useState

import happyHome from "../../images/happyHome.svg";
import shoppCart from "../../images/shop_cart.svg";
import settings from "../../images/SettingT.svg";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header({ isLoggedIn, onLogout, userEmail }) {
  const location = useLocation();

  const handleLogout = (event) => {
    event.preventDefault();
    onLogout(); // Llama a onLogout sin pasar el evento
  };

  if (isLoggedIn) {
    return (
      <header className="header">
        <img src={happyHome} alt="Happy Home" className="header__logo" />
        <div className="header__container">
          <p className="header__email">{userEmail}</p>
          <Link to="/signin">
            <button onClick={handleLogout} className="header__close">
              Cerrar sesión
            </button>
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <img src={happyHome} alt="Happy Home" className="header__logo" />
      <div>
        {location.pathname === "/signin" ? (
          <Link to="/signup">
            <button className="header__close">Regístrate</button>
          </Link>
        ) : (
          <Link to="/signin">
            <button className="header__close">Iniciar sesión</button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
