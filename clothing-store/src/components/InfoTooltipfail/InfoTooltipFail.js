import check from "../../images/Unionfail.png";
import { useEffect } from "react";

function InfoTooltipFail({ isOpen, onClose }) {
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
          onClick={onClose}
        ></button>
        <img
          src={check}
          alt="unioncheckfail"
          className="container-info-tool__image"
        />
        <h2 className="container-info-tool__text">
          Uy, algo salió mal. Por favor, inténtalo de nuevo.
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltipFail;
