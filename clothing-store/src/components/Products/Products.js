import "./Products.css";
import React, { useContext, useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";
// import React, { useContext } from "react";

//import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Products({
  onSelectedProduct,
  onProductLike,
  onProductLinkClick,
  onProductCart,
  products,
  isLoading,
}) {
  // const currentUser = useContext(CurrentUserContext);
  const { searchTerm } = useContext(SearchContext); // Obtiene el valor de `searchTerm` del contexto

  const [numToShow, setNumToShow] = useState(3); // Nuevo estado para el número de productos a mostrar

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const productsToShow = filteredProducts.slice(0, numToShow); // Obtiene solo los productos que se deben mostrar

  const handleShowMore = () => {
    setNumToShow((prevNumToShow) => prevNumToShow + 3); // Aumenta el número de productos a mostrar
  };

  if (isLoading) {
    return <i className="circle-preloader"></i>; // Render preloader if data is loading
  }

  return (
    <div>
      <section className="products">
        {Array.isArray(products) && filteredProducts.length > 0 ? (
          productsToShow.map((product, index) => {
            const key = product._id || index; // Si la tarjeta no tiene _id, usa el índice del array

            // Verifica si el usuario actual agrego el producto a favoritos
            // const isLiked = product.likes.some((i) => i === currentUser._id);

            // Verifica si el usuario actual agrego el producto al carrito
            // const isAttached = product.attaches.some(
            //  (i) => i === currentUser._id
            // );

            // Crea una variable que después establecerás en `className` para el botón favoritos
            // const likeButtonClassName = `product__heart ${
            //  isLiked ? "product__heart_active" : "product__heart"
            // }`;

            // Crea una variable que después establecerás en `className` para el botón favoritos
            // const cartButtonClassName = `product__cart ${
            //  isAttached ? "product__cart_active" : "product__cart"
            // }`;

            return (
              <div className="product" key={key}>
                <img
                  className="product__image"
                  src={product.image}
                  alt={`imagen de ${product.titte}`}
                />
                <p className="product__title">{product.title}</p>
                <p className="product__subtitle">
                  {product.description
                    ? product.description
                    : "Sin descripción"}
                </p>
                <span className="product__price">${product.price}</span>
                <div className="product__buttons">
                  <button className="product__like"></button>
                  <button className="product__cart"></button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="products__not-found">
            Lo sentimos, producto no encontado 😞, por favor intenta con otro
            producto!
          </p>
        )}
      </section>
      {numToShow < filteredProducts.length && ( // Solo muestra el botón si hay más productos para mostrar
        <button className="products__add-button" onClick={handleShowMore}>
          Mostrar más
        </button>
      )}
    </div>
  );
}

export default Products;
