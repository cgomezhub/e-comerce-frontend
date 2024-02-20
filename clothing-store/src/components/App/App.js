import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Products from "../Products/Products";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
// import Preloader from "../Preloader/Preloader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState(null);

  const [token, setToken] = useState("");

  const handleLogout = () => {
    setEmail(null);
    setIsLoggedIn(false);
    localStorage.clear();
    setToken("");
    window.location.reload();
  };

  return (
    <div className="app">
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        userEmail={email}
      />
      <Navigation />
      <Products />
      <RegisterModal />
      <LoginModal />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
