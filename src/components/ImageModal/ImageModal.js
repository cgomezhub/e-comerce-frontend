import "./ImageModal.css";
import React, { useEffect } from "react";
import close from "../../images/closeX.svg";

const selectedProduct =
  // Array de productos mientras se implementa la conexión con la API
  {
    _id: "1",
    name: "Camiseta",
    link: "https://media.istockphoto.com/id/1501781167/es/foto/camiseta-negra-aislada-en-blanco.jpg?s=612x612&w=is&k=20&c=Oj93T1rnrnxFuyPlm0ChlG1LITEYiN8wb9j7gCflvAk=",
    likes: ["1", "2"],
    attaches: ["1", "2"],
    stock: 10,
    description: "Camiseta negra de algodón",
    price: 100,
  };
export default function ImageModal({ onClose, isProductLinkClick }) {
  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === "Escape" && selectedProduct) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscClose);

    // Limpiar event listener al desmontar el componente
    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  }, [onClose]);

  return (
    <section
      className={`image-modal ${
        selectedProduct && isProductLinkClick ? "image-modal_visible" : ""
      }`}
      onClick={onClose}
    >
      <div className="image-modal__container" onClick={onClose}>
        <img
          src={close}
          alt="close"
          className="image-modal__close"
          onClick={onClose}
        ></img>
        <img
          alt={`imagen de ${selectedProduct.name}`}
          src={selectedProduct.link}
          className="image-modal__photo"
        />
        <p className="image-modal__name">{selectedProduct.name}</p>
      </div>
    </section>
  );
}
