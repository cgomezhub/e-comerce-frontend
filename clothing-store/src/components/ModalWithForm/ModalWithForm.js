import "./ModalWithForm.css";
import React, { useEffect } from "react";

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
        <h2 className="modal__form-title">{title}</h2>
        {children}
      </form>
    </section>
  );
}

export default ModalWithForm;
