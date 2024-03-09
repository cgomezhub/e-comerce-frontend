import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Contact from "../Contact/Contact";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import AvatarEditModal from "../EditAvatarModal/EditAvatarModal";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import InfoTooltipFail from "../InfoTooltipfail/InfoTooltipFail";
import NotFound from "../NotFound/NotFound";
import ShoppingCart from "../ShoopingCart/ShoppingCart";
import Favorites from "../Favorites/Favorites";
import Footer from "../Footer/Footer";

// import apiProducts from "../../utils/FakeStoreApi";
import { api, apiAuth } from "../../utils/webStoreApi";
import { apiMail } from "../../utils/MailSenderApi";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Checkout from "../Checkout/Checkout";

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState(() => {
    const savedNumbers = localStorage.getItem("selectedNumbers");
    return savedNumbers ? JSON.parse(savedNumbers) : {};
  });

  const [products, setProducts] = useState([]);

  const [cartProducts, setCartProducts] = useState(() => {
    const savedCartProducts = localStorage.getItem("cartProducts");
    return savedCartProducts ? JSON.parse(savedCartProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedNumbers", JSON.stringify(selectedNumbers));
  }, [selectedNumbers]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const [favoriteProducts, setFavoriteProducts] = useState(() => {
    const savedFavoriteProducts = localStorage.getItem("favoriteProducts");
    return savedFavoriteProducts ? JSON.parse(savedFavoriteProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts));
  }, [favoriteProducts]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState(null);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  const [isEditAvatarModalOpen, setIsEditAvatarModalOpen] = useState(false);

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  const [isInfoTooltipFailOpen, setIsInfoTooltipFailOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});

  const [token, setToken] = useState("");

  useEffect(() => {
    handleproducts();
  }, []);

  const handleproducts = () => {
    setIsLoading(true);
    api
      .getProductList()
      .then((data) => {
        setIsLoading(false);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  const onProductCart = (product, cartButtonClassName) => {
    setCartProducts((prevProducts) => {
      if (cartButtonClassName.includes("product__cart_active")) {
        // Si la clase es "product__cart_active", agrega el producto al arreglo
        return [...prevProducts, product];
      } else if (cartButtonClassName.includes("product__cart")) {
        // Si la clase es "product__cart", elimina el producto del arreglo
        return prevProducts.filter((p) => p._id !== product._id);
      } else {
        // Si la clase es cualquier otra cosa, no cambies el arreglo
        return prevProducts;
      }
    });
  };

  const addProductToCart = (productToAdd) => {
    setCartProducts((prevProducts) => {
      const productExists = prevProducts.some(
        (product) => product._id === productToAdd._id
      );
      if (productExists) {
        return prevProducts;
      } else {
        return [...prevProducts, productToAdd];
      }
    });
  };

  const onProductFavorite = (product, likeButtonClassName) => {
    setFavoriteProducts((prevProducts) => {
      if (likeButtonClassName.includes("product__heart_active")) {
        // Si la clase es "product__heart_active", agrega el producto al arreglo
        return [...prevProducts, product];
      } else if (likeButtonClassName.includes("product__heart")) {
        // Si la clase es "product__heart", elimina el producto del arreglo
        return prevProducts.filter((p) => p._id !== product._id);
      } else {
        // Si la clase es cualquier otra cosa, no cambies el arreglo
        return prevProducts;
      }
    });
  };

  const closeAllModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
    setIsEditProfileModalOpen(false);
    setIsEditAvatarModalOpen(false);
    setIsInfoTooltipOpen(false);
    setIsInfoTooltipFailOpen(false);
  };

  const handleRegisterSubmit = (user) => {
    apiAuth
      .register(user)
      .then((response) => {
        if (response) {
          setIsRegisterModalOpen(false);
          setIsInfoTooltipOpen(true);
          console.log(response);
        } else {
          setIsRegisterModalOpen(false);
          setIsInfoTooltipFailOpen(true);
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });
  };

  const handleSigninSubmit = (user) => {
    apiAuth
      .loginUser(user)
      .then((data) => {
        if (data) {
          localStorage.clear();
          //console.log(data.token);
          localStorage.setItem("token", data.token);
          // console.log(token);
          setIsLoginModalOpen(false);
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

  // manejador del token para obtener  usuario

  const handleUser = () => {
    //console.log(localStorage.getItem("token"));
    api
      .getUser()
      .then((response) => {
        if (response) {
          // console.log(response);
          setEmail(response.data.email);
          setCurrentUser(response.data);
        } else {
          // maneja errores de carga de datos
          console.log(response);
        }
      })
      .catch((error) => {
        alert("Error during registration:", error);
      });
  };

  useEffect(() => {
    const checkToken = async () => {
      setToken(localStorage.getItem("token"));
      // console.log(token);
      if (token) {
        handleUser();
        setIsLoggedIn(true);
      }
    };
    checkToken();
  }, [navigate, token]);

  const handleUpdateUser = (userData) => {
    api
      .userProfileUpdate(userData)
      .then((response) => {
        setCurrentUser(response.data);
        closeAllModals();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateAvatar = (userData) => {
    if (!userData || !userData.avatar) {
      console.error("userData is undefined or does not have a name property");
      return;
    }
    api
      .userAvatarUpdate(userData)
      .then((updateAvatarData) => {
        setCurrentUser(updateAvatarData);
        closeAllModals();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSendEmail = (info) => {
    apiMail
      .sendEmail(info)
      .then((response) => {
        alert("Email sent successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error sending email");
      });
  };

  const handleLogout = () => {
    setEmail(null);
    setIsLoggedIn(false);
    localStorage.clear();
    window.location.reload();
  };

  function handleProductLike(product) {
    if (!product || !product._id) {
      console.error("Invalid product object");
      return;
    }
    // Verifica una vez más si a esta tarjeta ya le han dado like
    const isLiked = product.likes.some((i) => i === currentUser._id);

    // Envía una petición a la API y obtén los datos actualizados de la tarjeta
    api.changeLikeStatus(product._id, !isLiked).then((newProduct) => {
      setProducts((state) =>
        state.map((c) => (c._id === product._id ? newProduct : c))
      );
    });
  }

  function handleCartProduct(product) {
    if (!product || !product._id) {
      console.error("Invalid product object");
      return;
    }
    // Verifica una vez más si a esta tarjeta ya le han dado like
    const isCarted = product.cart.some((i) => i === currentUser._id);

    // Envía una petición a la API y obtén los datos actualizados de la tarjeta
    api.changeCartStatus(product._id, !isCarted).then((newProduct) => {
      setProducts((state) =>
        state.map((c) => (c._id === product._id ? newProduct : c))
      );
    });
  }

  function removeProductCart(productToRemove) {
    setCartProducts((prevProducts) => {
      return prevProducts.filter(
        (product) => product._id !== productToRemove._id
      );
    });
  }

  function removeProductFavorites(productToRemove) {
    setFavoriteProducts((prevProducts) => {
      return prevProducts.filter(
        (product) => product._id !== productToRemove._id
      );
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                isLoading={isLoading}
                isLoggedIn={isLoggedIn}
                onLoginClick={handleLoginClick}
                onProductLike={handleProductLike}
                onCartProduct={handleCartProduct}
                onProductCart={onProductCart}
                onProductFavorite={onProductFavorite}
                cartProducts={cartProducts}
                favoriteProducts={favoriteProducts}
              />
            }
          />
          <Route path="about-us" element={<About />} />
          <Route
            path="contact-us"
            element={
              <Contact onSendEmail={handleSendEmail} isLoading={isLoading} />
            }
          />
          {console.log(cartProducts.length)}
          <Route
            path="shopping-cart"
            element={
              <ShoppingCart
                cartProducts={cartProducts}
                selectedNumbers={selectedNumbers}
                setSelectedNumbers={setSelectedNumbers}
                removeProductCart={removeProductCart}
              />
            }
          />
          <Route
            path="favorites"
            element={
              <Favorites
                favoriteProducts={favoriteProducts}
                removeProductFavorites={removeProductFavorites}
                onProductLike={handleProductLike}
                addProductToCart={addProductToCart}
              />
            }
          />
          <Route
            path="checkout"
            element={
              <Checkout
                cartProducts={cartProducts}
                selectedNumbers={selectedNumbers}
                setSelectedNumbers={setSelectedNumbers}
                removeProductCart={removeProductCart}
              />
            }
          />

          <Route>
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={closeAllModals}
          onLoginClick={handleLoginClick}
          onRegisterSubmit={handleRegisterSubmit}
        />
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={closeAllModals}
          onRegisterClick={handleRegisterClick}
          onLoginSubmit={handleSigninSubmit}
        />
        <EditProfileModal
          isOpen={isEditProfileModalOpen}
          onClose={closeAllModals}
          onUpdateUser={handleUpdateUser}
        />
        <AvatarEditModal
          isOpen={isEditAvatarModalOpen}
          onClose={closeAllModals}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllModals}
          onLoginClick={handleLoginClick}
        />
        <InfoTooltipFail
          isOpen={isInfoTooltipFailOpen}
          onClose={closeAllModals}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
