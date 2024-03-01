import React, { useState, Route, Routes } from "react"; // Importa useState

import happyHome from "../../images/happyHome.svg";

import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header({
  isLoggedIn,
  onLogout,
  userEmail,
  onLoginClick,
  onRegisterClick,
}) {
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
      <Link to="/">
        <img src={happyHome} alt="Happy Home" className="header__logo" />
      </Link>
      <div>
        {location.pathname === "/signin" ? (
          <button className="header__close" onClick={onRegisterClick}>
            Regístrate
          </button>
        ) : (
          <button className="header__close" onClick={onLoginClick}>
            Iniciar sesión
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
