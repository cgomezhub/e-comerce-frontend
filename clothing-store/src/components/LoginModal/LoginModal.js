import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onLoginSubmit, onRegisterClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };

    onLoginSubmit(user);
  };

  return (
    <ModalWithForm
      title="Iniciar Sesión"
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="login-email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        className="modal__form-input"
        placeholder="Correo electrónico"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="modal__form-error"></span>
      <input
        id="register-password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className="modal__form-input"
        placeholder="Contraseña"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="modal__form-error"></span>
      <div className="modal__form-buttons">
        <button id="user-login" type="submit" className="modal__form-register">
          Ingresar
        </button>
        <span className="modal__form-option"> o </span>
        <span
          className="modal__form-login"
          onClick={() => {
            onClose();
            onRegisterClick();
          }}
        >
          Inscribirse
        </span>
      </div>
    </ModalWithForm>
  );
}
export default LoginModal;
