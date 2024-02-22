import React, { useState } from "react";
import "./SearchBar.css"; // Asegúrate de crear este archivo y agregar tus estilos
import searchIcon from "../../images/lens.svg"; // Asegúrate de tener una imagen de lupa en tu proyecto

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

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(inputValue);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">
          <img src={searchIcon} alt="Buscar" />
        </button>
      </form>
      {filteredProducts.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <img src={product.link} alt={product.name} />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
