import "./Products.css";
import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
// import React, { useContext } from "react";

//import { CurrentUserContext } from "../contexts/CurrentUserContext";

const products = [
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

function Products({
  onSelectedProduct,
  onProductLike,
  onProductLinkClick,
  onProductCart,
}) {
  // const currentUser = useContext(CurrentUserContext);
  const { searchTerm } = useContext(SearchContext); // Obtiene el valor de `searchTerm` del contexto

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="products">
      {Array.isArray(products) &&
        filteredProducts.map((product, index) => {
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
                className="product__link"
                src={product.link}
                alt={`imagen de ${product.name}`}
                onClick={() => {
                  onSelectedProduct(product);
                  onProductLinkClick(product);
                }}
              />
              <span className="product__stock">
                Stock: {product.stock ? product.stock : "Agotado"}
              </span>
              <p className="product__name">{product.name}</p>
              <p className="product__description">
                {product.description ? product.description : "Sin descripción"}
              </p>
              <span className="product__stock">
                $ {product.stock ? product.price : "NA"}
              </span>
              <div className="product__buttons">
                <button
                  className="product__like"
                  onClick={() => onProductLike(product)}
                ></button>
                <button
                  className="product__cart"
                  onClick={() => onProductCart(product)}
                ></button>
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default Products;
