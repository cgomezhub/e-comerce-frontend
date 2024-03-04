import "./ShoppingCart.css";
import listErase from "../../images/closeX.svg";
import React, { useState } from "react";

const shoppingProducts = [
  // Array de productos anadidos al carrito que llegaran desde el arreglo de productos
  {
    _id: "1",
    name: "Camiseta",
    link: "https://media.istockphoto.com/id/1501781167/es/foto/camiseta-negra-aislada-en-blanco.jpg?s=612x612&w=is&k=20&c=Oj93T1rnrnxFuyPlm0ChlG1LITEYiN8wb9j7gCflvAk=",
    likes: ["1", "2"],
    attaches: ["1", "2"],
    stock: 10,
    description: "Camiseta negra de algodón",
    price: 100,
  },
  {
    _id: "2",
    name: "Pantalón",
    link: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: ["1", "2"],
    attaches: ["1", "2"],
    stock: 5,
    description: "Pantalón de mezclilla",
    price: 200,
  },
  {
    _id: "3",
    name: "Zapatos",
    link: "https://media.istockphoto.com/id/1629114862/es/foto/primer-plano-de-zapatillas-deportivas-blancas-sobre-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=PDkXkxm3gcejli3vWzZAHmVj0cVw5mmKFKzZGKov5ks=",
    likes: ["1", "2"],
    attaches: ["1", "2"],
    stock: 0,
    description: "Zapatos deportivos blancos",
    price: 300,
  },
];

export default function ShoppingCart({
  onSelectedProduct,
  onProductLinkClick,
  onProductCart,
}) {
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleQuantityChange = (e) => {
    setSelectedNumber(e.target.value);
  };

  return (
    <div className="shopping-cart">
      <h1 className="shopping-cart__title">Carrito</h1>
      <form className="shopping-cart__container">
        <section className="shopping-cart__container-items">
          {Array.isArray(shoppingProducts) &&
            shoppingProducts.map((product, index) => {
              const key = product._id || index; // Si la tarjeta no tiene _id, usa el índice del array

              return (
                <ul className="items" key={key}>
                  <li className="item">
                    <div className="item__container-link">
                      <img
                        className="item__link"
                        src={product.link}
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
                          <span className="item__price">
                            $ {product.stock ? product.price : "NA"}
                          </span>
                        </div>
                        <div className="item__container-description-qty">
                          <select
                            value={selectedNumber}
                            onChange={handleQuantityChange}
                            className="item__qty"
                          >
                            {[...Array(9).keys()].map((value) => (
                              <option key={value + 1} value={value + 1}>
                                {value + 1}
                              </option>
                            ))}
                          </select>
                          <img
                            src={listErase}
                            alt="erase"
                            className="item__erase"
                            onClick={() => {
                              onProductCart(product);
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
              <span className="summary__subtotal-item-qty">$300</span>
            </li>
            <li className="summary__subtotal">
              <span className="summary__subtotal-item-title">Envío:</span>
              <span className="summary__subtotal-item-qty">$10</span>
            </li>
            <li className="summary__subtotal">
              <span className="summary__subtotal-item-title">Impuestos:</span>
              <span className="summary__subtotal-item-qty">$10</span>
            </li>
            <li className="summary__total">
              <span className="summary__total-item-title">Importe total:</span>
              <span className="summary__total-item-qty">$1000</span>
            </li>
          </ul>
          <span className="shopping-cart__container-summary-checkout">
            Proceder al pago
          </span>
        </section>
      </form>
    </div>
  );
}
