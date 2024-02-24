import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import AvatarEditModal from "../AvatarEditModal/AvatarEditModal";
import Footer from "../Footer/Footer";
// import Preloader from "../Preloader/Preloader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState(null);

  // const [token, setToken] = useState(""); se iimplemetara en otra etapa

  const handleLogout = () => {
    setEmail(null);
    setIsLoggedIn(false);
    localStorage.clear();
    // setToken("");
    window.location.reload();
  };

  return (
    <div className="app">
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        userEmail={email}
      />
      <Main />
      <Footer />
      <RegisterModal />
      <LoginModal />
      <EditProfileModal />
      <AvatarEditModal />
    </div>
  );
}

export default App;
