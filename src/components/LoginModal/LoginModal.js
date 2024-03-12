import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onLoginSubmit, onRegisterClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const validateForm = () => {
      setFormValid(email !== "" && password.length >= 8 && emailError === "");
    };

    validateForm();
  }, [email, password, emailError]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (event.target.value === "") {
      setEmailError("");
    } else if (!emailRegex.test(event.target.value)) {
      setEmailError("Correo electrónico no válido");
    } else {
      setEmailError("");
    }
  };

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
        minLength="8"
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
        id="login-password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className="modal__form-input"
        placeholder="Introduzca contraseña mayor de al menos 8 caracteres"
        minLength="8"
        maxLength="200"
        required
      />
      <span className="modal__form-error"></span>
      <div className="modal__form-buttons">
        <button
          type="submit"
          className="modal__form-register"
          disabled={!isFormValid}
          style={{ backgroundColor: isFormValid ? "#8cace5" : "darkgray" }}
        >
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
