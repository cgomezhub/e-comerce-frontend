import "./Main.css";
import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Products from "../Products/Products";

import { SearchContext } from "../../contexts/SearchContext";

function Main({
  products,
  onEditProfileClick,
  onEditAvatarClick,
  isLoading,
  isLoggedIn,
  onLoginClick,
  onProductLike,
  onCartProduct,
  onProductCart,
  cartProducts,
  onProductFavorite,
  favoriteProducts,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main className="container">
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <Navigation
          onEditProfileClick={onEditProfileClick}
          onEditAvatarClick={onEditAvatarClick}
          isLoggedIn={isLoggedIn}
          cartProducts={cartProducts}
          favoriteProducts={favoriteProducts}
        />
        <Products
          products={products}
          isLoading={isLoading}
          isLoggedIn={isLoggedIn}
          onLoginClick={onLoginClick}
          onProductLike={onProductLike}
          onCartProduct={onCartProduct}
          onProductCart={onProductCart}
          onProductFavorite={onProductFavorite}
        />
      </SearchContext.Provider>
    </main>
  );
}
export default Main;
