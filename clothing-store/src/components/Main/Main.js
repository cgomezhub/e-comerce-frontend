import "./Main.css";
import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Products from "../Products/Products";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Favorites from "../Favorites/Favorites";
import ImageModal from "../ImageModal/ImageModal";
import { SearchContext } from "../../context/SearchContext";

// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main() {
  /* const currentUser = useContext(CurrentUserContext);
  if (!currentUser) {
    return <div>Loading...</div>; //
  } */

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main className="container">
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <Navigation />
        <Products />
      </SearchContext.Provider>
      <About />
      <Contact />
      <Favorites />
      <ImageModal />
    </main>
  );
}
export default Main;
