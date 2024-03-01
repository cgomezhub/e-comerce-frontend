import "./Main.css";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Products from "../Products/Products";

import { SearchContext } from "../../context/SearchContext";

// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ products, onEditProfileClick, onEditAvatarClick }) {
  /* const currentUser = useContext(CurrentUserContext);
  if (!currentUser) {
    return <div>Loading...</div>; //
  } */

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main className="container">
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <Navigation
          onEditProfileClick={onEditProfileClick}
          onEditAvatarClick={onEditAvatarClick}
        />
        <Outlet />
        <Products products={products} />
      </SearchContext.Provider>
    </main>
  );
}
export default Main;
