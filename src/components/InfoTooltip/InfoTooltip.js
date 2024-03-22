import "./InfoTooltip.css";
import check from "../../images/Unioncheck.png";
import { useEffect } from "react";

function InfoTooltip({ isOpen, onClose, onLoginClick, isLoggedIn }) {
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
      <div className="container-info-tool">
        <button
          type="button"
          className="container-info-tool__close"
          onClick={() => {
            onClose();
            if (isLoggedIn === false) {
              onLoginClick();
            }
          }}
        ></button>
        <img
          src={check}
          alt="imagen unioncheck"
          className="container-info-tool__image"
        />
        <h2 className="container-info-tool__text">
          ¡Correcto! Ya estás registrado.
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
