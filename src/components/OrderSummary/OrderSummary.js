import "./OrderSummary.css";
import React, { useState } from "react";
import Summary from "../Summary/Summary";

export default function OrderSummary({
  onSelectedProduct,
  onProductLinkClick,
  onProductCart,
  cartProducts,
  subtotal,
  taxes,
  deliveryCost,
  total,
  deliveryOption,
}) {
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleQuantityChange = (e) => {
    setSelectedNumber(e.target.value);
  };

  return (
    <div className="checkout">
      <form className="checkout__container">
        <section className="checkout__container-flex">
          <p className="checkout__container-surtitle">Pago exitoso</p>
          <h2 className="checkout__container-title">¡Gracias por su compra!</h2>
          <p className="checkout__container-subtitle">
            Agradecemos su pedido, actualmente lo estamos procesando. ¡Así que
            espera y te enviaremos la confirmación muy pronto!
          </p>
          {Array.isArray(cartProducts) &&
            cartProducts.map((product, index) => {
              const key = product._id || index; // Si la tarjeta no tiene _id, usa el índice del array

              return (
                <ul className="items" key={key}>
                  <li className="item">
                    <div className="item__container-link">
                      <img
                        className="item__link"
                        src={product.image}
                        alt={`imagen de ${product.name}`}
                        onClick={() => {
                          onSelectedProduct(product);
                          onProductLinkClick(product);
                        }}
                      />
                    </div>
                    <div className="item__container-description">
                      <div className="item__container-description-data">
                        <div className="item__container-description-price">
                          <span className="item__name">{product.name}</span>
                          <span className="item__description">
                            {product.description ? product.description : ""}
                          </span>
                        </div>
                      </div>
                      <div className="item__container-description-qty">
                        <span className="item__price">
                          $ {product.stock ? product.price : "NA"}
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              );
            })}
        </section>
        <section className="checkout__container-flex">
          <Summary
            subtotal={subtotal}
            taxes={taxes}
            deliveryCost={deliveryCost}
            deliveryOption={deliveryOption}
            total={total}
          />
          <p className="checkout__container-surtitle">Direción de envio</p>
          <p className="checkout__container-subtitle">
            Kristin Watson 7363 Cynthia Pass Toronto, ON N3Y 4H8
          </p>
        </section>
      </form>
    </div>
  );
}
