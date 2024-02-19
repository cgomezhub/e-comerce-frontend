import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { Link } from "react-router-dom";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onRegisterSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleRePasswordChange(e) {
    setRePassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { name, email, password };

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
      <input
        id="register-name"
        className="modal__form-input"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Nombre de usuario"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="modal__form-error"></span>
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
      <input
        id="register-repassword"
        type="password"
        value={rePassword}
        onChange={handleRePasswordChange}
        className="modal__form-input"
        placeholder="Vuelva a introducir la contraseña"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="modal__form-error"></span>
      <div className="modal__form-buttons">
        <button
          id="user-register"
          type="submit"
          className="modal__form-register"
        >
          Inscribirse
        </button>
        <span className="modal__form-option"> o </span>
        <Link to="/signin">
          <span className="modal__form-login">Iniciar Sesión</span>
        </Link>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
