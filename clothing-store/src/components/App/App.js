import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Contact from "../Contact/Contact";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import AvatarEditModal from "../EditAvatarModal/EditAvatarModal";
import Footer from "../Footer/Footer";

import api from "../../utils/FakeStoreApi";

// import Preloader from "../Preloader/Preloader";

function App() {
  const [products, setProducts] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState(null);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  const [isEditAvatarModalOpen, setIsEditAvatarModalOpen] = useState(false);

  const handleproducts = () => {
    api
      .getProductList()
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleproducts();
  }, []);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarModalOpen(true);
  };

  const closeAllModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
    setIsEditProfileModalOpen(false);
    setIsEditAvatarModalOpen(false);
  };

  // const [token, setToken] = useState(""); se iimplemetara en otra etapa
  /*
  const handleSigninSubmit = (user) => {
    apiRegister
      .authUser(user)
      .then((data) => {
        if (data) {
          // maneja la respuesta del servidor aquí
          // redirigir al usuario a la pgina principal de la app
          localStorage.clear();
          //console.log(data.token);
          localStorage.setItem("token", data.token);
          //console.log(localStorage.getItem("token"));
          // console.log(token);
          handleUser();
          setIsLoggedIn(true);
          navigate("/");
        } else {
          // maneja errores de carga de datos
          setIsInfoTooltipFailOpen(true);
          throw new Error("Token not returned");
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });
    // dirigir a para  configurar el mail a mostar
  };

  useEffect(() => {
    const checkToken = async () => {
      setToken(localStorage.getItem("token"));
      // console.log(token);
      if (token) {
        handleUser();
        handleCards();
        setIsLoggedIn(true);
        navigate("/");
      }
    };
    checkToken();
  }, [navigate, token]);

  */

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
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              products={products}
              onEditProfileClick={handleEditProfileClick}
              onEditAvatarClick={handleEditAvatarClick}
            />
          }
        >
          <Route path="about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Route>
        <Route
          path="/products"
          element={
            <Main
              products={products}
              onEditProfileClick={handleEditProfileClick}
              onEditAvatarClick={handleEditAvatarClick}
            />
          }
        />
      </Routes>
      <Footer />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeAllModals}
        onLoginClick={handleLoginClick}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeAllModals}
        onRegisterClick={handleRegisterClick}
      />
      <EditProfileModal
        isOpen={isEditProfileModalOpen}
        onClose={closeAllModals}
      />
      <AvatarEditModal
        isOpen={isEditAvatarModalOpen}
        onClose={closeAllModals}
      />
    </div>
  );
}

export default App;
