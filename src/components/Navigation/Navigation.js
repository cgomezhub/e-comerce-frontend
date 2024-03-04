import "./Navigation.css";
import React, { useContext, useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import Profile from "../Profile/Profile";
import witheHeart from "../../images/heart.svg";
import lens from "../../images/lens.svg";
import cart from "../../images/shoppCart.svg";

import { Link } from "react-router-dom";

function Navigation({ onEditProfileClick, onEditAvatarClick, isLoggedIn }) {
  const { setSearchTerm } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <Link to="/">
          <span className="navigation__pes">Productos</span>
        </Link>
        <Link to="/contact-us">
          <span className="navigation__pes">Contactanos</span>
        </Link>
        <Link to="/about-us">
          <span className="navigation__pes">Nosotros</span>
        </Link>
      </div>
      <div className="navigation__search-bar">
        <form onSubmit={handleSearch} className="navigation__form">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={inputValue}
            onChange={handleInputChange}
            className="navigation__input"
          />
          <button type="submit">
            <img src={lens} alt="Buscar" />
          </button>
        </form>
      </div>
      <div className="navigation__buttons">
        {isLoggedIn && (
          <Profile
            onEditProfileClick={onEditProfileClick}
            onEditAvatarClick={onEditAvatarClick}
          />
        )}
        <img src={witheHeart} alt="favorites" className="navigation__icon" />
        <span className="navigation__count">{0}</span>
        <img src={cart} alt="Cart" className="navigation__icon" />
        <span className="navigation__count">{0}</span>
      </div>
    </nav>
  );
}
export default Navigation;
