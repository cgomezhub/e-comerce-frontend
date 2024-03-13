import "./Checkout.css";
import close from "../../images/closeX.svg";
import Summary from "../Summary/Summary";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Checkout({
  cartProducts,
  selectedNumbers,
  setSelectedNumbers,
  removeProductCart,
  subtotal,
  taxes,
  deliveryOption,
  setDeliveryOption,
  deliveryCost,
  total,
  email,
  form,
  setForm,
}) {
  const handleQuantityChange = (productId, event) => {
    setSelectedNumbers((prevNumbers) => ({
      ...prevNumbers,
      [productId]: event.target.value,
    }));
  };
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const fields = [
      "fullName",
      "address",
      "apartment",
      "city",
      "country",
      "state",
      "postalCode",
      "phone",
    ];
    const isFormValid = fields.every(
      (field) => form[field] && form[field].length >= 2
    );
    setIsFormValid(isFormValid);
  }, [form]);

  const handleInputChange = (event, field) => {
    setForm({
      ...form,
      [field]: event.target.value,
    });
  };

  return (
    <div className="checkout">
      <form className="checkout__container">
        <section className="checkout__container-flex">
          <h2 className="checkout__container-title">Información de contacto</h2>
          <label className="checkout__container-label">
            {" "}
            Correo electrónico
          </label>
          <input
            className="checkout__container-input"
            type="email"
            value={email}
            //  onChange={(event) => handleInputChange(event, "email")} // Agrega un controlador de cambi
            required
          />
        </section>
        <section className="checkout__container-flex">
          <h2 className="checkout__container-title">Información de Envio</h2>
          <label className="checkout__container-label"> Nombre completo</label>
          <input
            className="checkout__container-input"
            type="text"
            value={form.fullName}
            required
            onChange={(event) => handleInputChange(event, "fullName")}
          />
          <label className="checkout__container-label">
            {" "}
            Compania (opcional)
          </label>
          <input className="checkout__container-input" type="text" />
          <label className="checkout__container-label"> Dirección</label>
          <input
            className="checkout__container-input"
            type="text"
            required
            value={form.address}
            onChange={(event) => handleInputChange(event, "address")}
          />
          <label className="checkout__container-label">
            {" "}
            # Casa, Apartamento, suite, etc.
          </label>
          <input
            className="checkout__container-input"
            type="text"
            required
            value={form.apartment}
            onChange={(event) => handleInputChange(event, "apartment")}
          />
          <div className="checkout__container-grid">
            <div className="checkout__container-grid-item">
              <label className="checkout__container-label"> Ciudad</label>
              <input
                className="checkout__container-input"
                type="text"
                value={form.city}
                onChange={(event) => handleInputChange(event, "city")}
                required
              />
            </div>
            <div className="checkout__container-grid-item">
              <label className="checkout__container-label"> Pais</label>
              <input
                className="checkout__container-input"
                type="text"
                value={form.country}
                onChange={(event) => handleInputChange(event, "country")}
                required
              />
            </div>
            <div className="checkout__container-grid-item">
              <label className="checkout__container-label"> Estado</label>
              <input
                className="checkout__container-input"
                type="text"
                value={form.state}
                onChange={(event) => handleInputChange(event, "state")}
                required
              />
            </div>
            <div className="checkout__container-grid-item">
              <label className="checkout__container-label">Código postal</label>
              <input
                className="checkout__container-input"
                type="text"
                value={form.postalCode}
                onChange={(event) => handleInputChange(event, "postalCode")}
                required
              />
            </div>
          </div>
          <label className="checkout__container-label">Telefono</label>
          <input
            className="checkout__container-input"
            type="number"
            value={form.phone}
            onChange={(event) => handleInputChange(event, "phone")}
            required
          />
        </section>

        <section className="checkout__container-flex">
          <h2 className="checkout__container-title">Metodo de entrega</h2>
          <div className="checkout__container-radio">
            <label className="delivery-option">
              <div class="delivery-option__description">
                <span className="item__name">Estandar</span>
                <span className="item__description">4–10 dias laborales</span>
                <span className="item__price">$5.00</span>
              </div>
              <input
                className="delivery-option__input"
                type="radio"
                name="delivery"
                id="standard"
                value="standard"
                checked={deliveryOption === "standard"}
                onChange={(e) => setDeliveryOption(e.target.value)}
                required
              />
            </label>
            <label className="delivery-option">
              <div class="delivery-option__description">
                <span className="item__name">Express</span>
                <span className="item__description"> 2–5 dias laborales</span>
                <span className="item__price">$15.00</span>
              </div>
              <input
                type="radio"
                name="delivery"
                id="express"
                value="express"
                checked={deliveryOption === "express"}
                onChange={(e) => setDeliveryOption(e.target.value)}
                required
              />
            </label>
          </div>
        </section>
        <section className="checkout__container-flex">
          <h2 className="checkout__container-title">Metodo de pago</h2>
          <div className="checkout__container-radio">
            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                id="credit-card"
                value="credit-card"
                required
              />
              <span className="item__name">tarjeta de credito</span>
            </label>
            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                id="paypal"
                value="paypal"
                required
              />
              <span className="item__name">Paypal</span>
            </label>
          </div>
        </section>
        <section className="checkout__container-flex">
          <h2 className="checkout__container-title">Orden de compra</h2>
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
                          <span className="item__name">{product.name}</span>
                          <span className="item__description">
                            {product.description ? product.description : ""}
                          </span>
                        </div>
                        <img
                          src={close}
                          alt="erase"
                          className="item__erase"
                          onClick={() => {
                            removeProductCart(product);
                          }}
                        />
                      </div>
                      <div className="item__container-description-qty">
                        <span className="item__price">
                          $ {product.stock ? product.price : "NA"}
                        </span>
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
                      </div>
                    </div>
                  </li>
                </ul>
              );
            })}
        </section>
        <section className="shopping-cart__container-flex">
          <Summary
            subtotal={subtotal}
            taxes={taxes}
            deliveryCost={deliveryCost}
            deliveryOption={deliveryOption}
            total={total}
          />
          <button
            type="submit"
            className="shopping-cart__container-summary-button"
            disabled={!isFormValid}
          >
            {isFormValid ? (
              <Link to="/order-summary">Confirmar compra</Link>
            ) : (
              "Confirmar compra"
            )}
          </button>
        </section>
      </form>
    </div>
  );
}
