import "./Favorites.css";
import listErase from "../../images/closeX.svg";
import { Link } from "react-router-dom";

export default function Favorites({
  onSelectedProduct,
  onProductLinkClick,
  favoriteProducts,
  removeProductFavorites,
  addProductToCart,
}) {
  return (
    <div className="favorites">
      <h2 className="favorites__title">Favoritos</h2>
      {favoriteProducts.length === 0 && (
        <p className="favorites__empty">Tu lista está vacía!</p>
      )}
      <section className="products">
        {Array.isArray(favoriteProducts) &&
          favoriteProducts.map((product, index) => {
            const key = product._id || index; // Si la tarjeta no tiene _id, usa el índice del array
            return (
              <div className="product" key={key}>
                <img
                  className="product__list-erase"
                  src={listErase}
                  alt="borrar de la lista"
                  onClick={() => {
                    removeProductFavorites(product);
                  }}
                />
                <img
                  className="product__image"
                  src={product.image}
                  alt={`imagen de ${product.name}`}
                  onClick={() => {
                    onSelectedProduct(product);
                    onProductLinkClick(product);
                  }}
                />
                <span className="product__stock">
                  $ {product.stock ? product.price : "NA"}
                </span>
                <span
                  className="product__add-to-cart"
                  onClick={() => {
                    removeProductFavorites(product);
                    addProductToCart(product);
                  }}
                >
                  Agregar al carrito
                </span>
              </div>
            );
          })}
      </section>
      <Link to="/">
        <button type="button" className="favorites__continue">
          continuar comprando
        </button>
      </Link>
    </div>
  );
}
