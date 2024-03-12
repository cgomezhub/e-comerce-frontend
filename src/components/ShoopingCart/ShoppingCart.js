import "./ShoppingCart.css";
import listErase from "../../images/closeX.svg";
import { Link } from "react-router-dom";
import Summary from "../Summary/Summary";

export default function ShoppingCart({
  cartProducts,
  selectedNumbers,
  setSelectedNumbers,
  removeProductCart,
  subtotal,
  taxes,
  deliveryCost,
  total,
  deliveryOption,
}) {
  const handleQuantityChange = (productId, event) => {
    setSelectedNumbers((prevNumbers) => ({
      ...prevNumbers,
      [productId]: event.target.value,
    }));
  };

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
          <Summary
            subtotal={subtotal}
            taxes={taxes}
            deliveryCost={deliveryCost}
            total={total}
            deliveryOption={deliveryOption}
          />
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
