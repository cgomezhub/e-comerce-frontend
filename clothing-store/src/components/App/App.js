import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Products from "../Products/Products";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

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
    </div>
  );
}

export default App;
