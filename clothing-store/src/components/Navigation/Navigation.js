import "./Navigation.css";
import witheHeart from "../../images/wHeart.svg";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/products">
        <span className="navigation__pes">Productos</span>
      </Link>
      <Link to="/contact-us">
        <span className="navigation__pes">Contactanos</span>
      </Link>
      <Link to="/about-me">
        <span className="navigation__pes">About Me</span>
      </Link>
      <Link to="/favorites">
        <img src={witheHeart} alt="favorites" className="navigation__heart" />
      </Link>
    </div>
  );
}
export default Navigation;
