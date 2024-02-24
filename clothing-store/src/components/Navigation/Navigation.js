import "./Navigation.css";
import React, { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import Profile from "../Profile/Profile";
import witheHeart from "../../images/heart.svg";
import lens from "../../images/lens.svg";
import profile from "../../images/profile.svg";
import cart from "../../images/shoppCart.svg";
import pencil from "../../images/pencil.svg";
import pencilEdit from "../../images/pencilEdit.png";

import { Link } from "react-router-dom";

function Navigation() {
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
        <Link to="/products">
          <span className="navigation__pes">Productos</span>
        </Link>
        <Link to="/contact-us">
          <span className="navigation__pes">Acerca HH</span>
        </Link>
        <Link to="/about-me">
          <span className="navigation__pes">Contactanos</span>
        </Link>
      </div>
      <div className="navigation__search-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar producto..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">
            <img src={lens} alt="Buscar" />
          </button>
        </form>
      </div>
      <div className="navigation__container">
        <Profile />
        <Link to="/favorites">
          <img src={witheHeart} alt="favorites" className="navigation__icon" />
        </Link>
        <span className="navigation__count">{0}</span>
        <Link to="/cart">
          <img src={cart} alt="Cart" className="navigation__icon" />
        </Link>
        <span className="navigation__count">{0}</span>
      </div>
    </nav>
  );
}
export default Navigation;
