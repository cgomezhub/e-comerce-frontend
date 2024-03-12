import "./About.css";
import HappyHome from "../../images/happyHome.svg";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="about__title">Acerca HH</h2>
      <div className="about__content">
        <p className="about__text">
          En Happy Home, creemos que la moda es una forma de expresión personal.
          Es por eso que nos apasiona ofrecer una amplia selección de ropa y
          calzado para hombres, mujeres y niños, de todos los estilos y para
          todas las ocasiones.
        </p>
        <p className="about__text">
          Nos enorgullecemos de ofrecer productos de alta calidad a precios
          accesibles. Además, nuestro equipo de atención al cliente está
          disponible para ayudarte en todo lo que necesites, desde encontrar el
          tamaño perfecto hasta realizar un cambio o devolución.
        </p>
        <p className="about__text">
          Nuestra misión: Ofrecer una amplia selección de ropa y calzado de alta
          calidad a precios accesibles, para que todos puedan expresar su estilo
          personal.
        </p>
        <p className="about__text">
          Happy Home, donde la moda se encuentra contigo!
        </p>
        <div className="about__image">
          <Link to="/">
            <img className="about__image" src={HappyHome} alt="HappyHome"></img>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
