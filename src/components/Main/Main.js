import "./Main.css";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Products from "../Products/Products";

import { SearchContext } from "../../contexts/SearchContext";

// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  products,
  onEditProfileClick,
  onEditAvatarClick,
  isLoading,
  isLoggedIn,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main className="container">
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <Navigation
          onEditProfileClick={onEditProfileClick}
          onEditAvatarClick={onEditAvatarClick}
          isLoggedIn={isLoggedIn}
        />
        <Outlet />
        <Products products={products} isLoading={isLoading} />
      </SearchContext.Provider>
    </main>
  );
}
export default Main;
