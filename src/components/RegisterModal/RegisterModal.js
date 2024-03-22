import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({
  isOpen,
  onClose,
  onRegisterSubmit,
  onLoginClick,
  onGoogleLogin,
}) {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Nuevo estado para el mensaje de error
  const [formValid, setFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    // El formulario es válido si las contraseñas coinciden y todos los campos están llenos
    setFormValid(
      passwordsMatch &&
        emailValid &&
        password.length >= 8 &&
        rePassword.length >= 8
    );
  }, [password, rePassword, passwordsMatch, emailValid]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (event.target.value === "") {
      setEmailError("");
      setEmailValid(false);
    } else if (!emailRegex.test(event.target.value)) {
      setEmailError("Correo electrónico no válido");
      setEmailValid(false);
    } else {
      setEmailError("");
      setEmailValid(true);
    }
  };

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    checkPasswordsMatch(e.target.value, rePassword);
  }

  function handleRePasswordChange(e) {
    setRePassword(e.target.value);
    checkPasswordsMatch(password, e.target.value);
  }

  const checkPasswordsMatch = (password, rePassword) => {
    const match = password === rePassword;
    setPasswordsMatch(match);
    setErrorMessage(match ? "" : "Las contraseñas no coinciden"); // Establece el mensaje de error
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };

    onRegisterSubmit(user);
  };

  return (
    <ModalWithForm
      title="Inscribirse"
      name="register"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div id="customBtn" class="customGPlusSignIn">
        <span class="icon"></span>
        <span class="buttonText" onClick={onGoogleLogin}>
          Iniciar sesión con Google
        </span>
      </div>
      <input
        id="register-email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        className="modal__form-input"
        placeholder="Correo electrónico"
        minLength="2"
        maxLength="200"
        required
      />
      <span
        className={`modal__form-error ${
          isOpen ? "modal__form-error_active" : ""
        }`}
      >
        {emailError}
      </span>
      <input
        id="register-password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className="modal__form-input"
        placeholder="Introduzca contraseña de al menos 8 caracteres"
        minLength="8"
        maxLength="50"
        required
      />
      <input
        id="register-repassword"
        type="password"
        value={rePassword}
        onChange={handleRePasswordChange}
        className="modal__form-input"
        placeholder="Repita la contraseña"
        minLength="8"
        maxLength="50"
        required
      />
      <span
        className={`modal__form-error ${
          isOpen ? "modal__form-error_active" : ""
        }`}
      >
        {errorMessage}
      </span>
      <div className="modal__form-buttons">
        <button
          id="user-register"
          type="submit"
          className={`modal__form-register ${!formValid ? "disabled" : ""}`}
          disabled={!formValid || password.length < 8 || rePassword.length < 8}
        >
          Inscribirse
        </button>
        <span className="modal__form-option"> o </span>
        <span
          className="modal__form-login"
          onClick={() => {
            onClose();
            onLoginClick();
          }}
        >
          Iniciar Sesión
        </span>{" "}
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
