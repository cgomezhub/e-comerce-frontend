import "./ShoppingCart.css";
import listErase from "../../images/closeX.svg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShoppingCart({
  cartProducts,
  selectedNumbers,
  setSelectedNumbers,
  removeProductCart,
}) {
  const handleQuantityChange = (productId, event) => {
    setSelectedNumbers((prevNumbers) => ({
      ...prevNumbers,
      [productId]: event.target.value,
    }));
  };

  const [subtotal, setSubtotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cartProducts.reduce((total, product) => {
      const quantity = selectedNumbers[product._id] || 0;
      return total + quantity * product.price;
    }, 0);
    setSubtotal(newSubtotal.toFixed(2));
    const newTaxes = (newSubtotal * 0.16).toFixed(2);
    setTaxes(newTaxes);
    const newDelivery = (5).toFixed(2);
    setDelivery(newDelivery);
    const newTotal = (
      parseFloat(newSubtotal) +
      parseFloat(newTaxes) +
      parseFloat(newDelivery)
    ).toFixed(2);
    setTotal(newTotal);
  }, [cartProducts, selectedNumbers]);

  return (
    <div className="shopping-cart">
      <h1 className="shopping-cart__title">Carrito</h1>
      {cartProducts.length === 0 && (
        <p className="shopping-cart__empty">Tu carrito está vacío!</p>
      )}
      <form className="shopping-cart__container">
        <section className="shopping-cart__container-items">
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
                        alt={`imagen de ${product.title}`}
                      />
                    </div>
                    <div className="item__container-description">
                      <div className="item__container-description-data">
                        <div className="item__container-description-price">
                          <span className="item__name">{product.title}</span>
                          <span className="item__description">
                            {product.description ? product.description : ""}
                          </span>
                          <span className="item__price">
                            $ {product.stock ? product.price : "NA"}
                          </span>
                        </div>
                        <div className="item__container-description-qty">
                          <select
                            value={selectedNumbers[product._id] || ""}
                            onChange={(event) =>
                              handleQuantityChange(product._id, event)
                            }
                            className="item__qty"
                          >
                            {[...Array(product.stock).keys()].map((value) => (
                              <option key={value} value={value + 1}>
                                {value + 1}
                              </option>
                            ))}
                          </select>
                          <img
                            src={listErase}
                            alt="erase"
                            className="item__erase"
                            onClick={() => {
                              removeProductCart(product);
                            }}
                          />
                        </div>
                      </div>
                      <span className="item__stock">
                        Stock: {product.stock ? product.stock : "Agotado"}
                      </span>
                    </div>
                  </li>
                </ul>
              );
            })}
        </section>
        <section className="shopping-cart__container-summary">
          <p className="shopping-cart__container-summary-title">
            Resumen de compra
          </p>
          <ul className="summary">
            <li className="summary__subtotal">
              <span className="summary__subtotal-item-title">Subtotal:</span>
              <span className="summary__subtotal-item-qty">${subtotal}</span>
            </li>
            <li className="summary__subtotal">
              <span className="summary__subtotal-item-title">
                Envío Standar:
              </span>
              <span className="summary__subtotal-item-qty">${delivery}</span>
            </li>
            <li className="summary__subtotal">
              <span className="summary__subtotal-item-title">Taxes:</span>
              <span className="summary__subtotal-item-qty">${taxes}</span>
            </li>
            <li className="summary__total">
              <span className="summary__total-item-title">Total:</span>
              <span className="summary__total-item-qty">${total}</span>
            </li>
          </ul>
          <Link to="/checkout">
            <span className="shopping-cart__container-summary-checkout">
              Proceder al pago
            </span>
          </Link>
        </section>
      </form>
      <Link to="/">
        <button type="button" className="shopping-cart__continue">
          continuar comprando
        </button>
      </Link>
    </div>
  );
}
