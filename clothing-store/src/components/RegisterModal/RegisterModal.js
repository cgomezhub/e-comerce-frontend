import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onRegisterSubmit, onLoginClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Nuevo estado para el mensaje de error
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    // El formulario es válido si las contraseñas coinciden y todos los campos están llenos
    setFormValid(
      passwordsMatch && email !== "" && password !== "" && rePassword !== ""
    );
  }, [email, password, rePassword, passwordsMatch]);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
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
      <input
        id="register-password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className="modal__form-input"
        placeholder="Contraseña"
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
        placeholder="Vuelva a introducir la contraseña"
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
          disabled={!formValid}
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
