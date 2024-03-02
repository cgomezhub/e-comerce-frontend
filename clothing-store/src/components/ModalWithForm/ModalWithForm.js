import "./ModalWithForm.css";
import React, { useEffect } from "react";
import close from "../../images/closeX.svg";

function ModalWithForm({ title, name, children, isOpen, onClose, onSubmit }) {
  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscClose);

    // Limpiar event listener al desmontar el componente
    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  return (
    <section className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <form id={name} className="modal__form" onSubmit={onSubmit}>
        <div className="modal__form-container">
          <h2 className="modal__form-title">{title}</h2>
          <img
            src={close}
            alt="close"
            className="modal__close"
            onClick={onClose}
          ></img>
        </div>
        {children}
      </form>
    </section>
  );
}

export default ModalWithForm;
