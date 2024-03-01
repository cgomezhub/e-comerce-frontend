import "./Favorites.css";
import listErase from "../../images/closeX.svg";

const favoriteProducts = [
  // Array de productos favoritos que llegaran desde el arreglo de productos
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

export default function Favorites({
  onSelectedProduct,
  onProductLike,
  onProductLinkClick,
  onProductCart,
}) {
  return (
    <div className="favorites">
      <p className="favorites__title">Lista de favoritos</p>
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
                />
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
                  $ {product.stock ? product.price : "NA"}
                </span>
                <span
                  className="product__add-to-cart"
                  onClick={() => onProductCart(product)}
                >
                  Agregar al carrito
                </span>
              </div>
            );
          })}
      </section>
    </div>
  );
}
