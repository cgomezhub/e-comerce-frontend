import "./Footer.css";
import GitHubIcon from "../../images/github.svg";
import LinkedInIcon from "../../images/linkedin.svg";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <span className="footer__copyright">© {currentYear}. Carlos Gomez</span>
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="nav__item">
            <a
              className="nav__link"
              href="https://www.linkedin.com/in/carlos-gomez-lugo/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="nav__icon grow"
                src={LinkedInIcon}
                alt="LinkedIn icon"
              ></img>
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link"
              href="https://github.com/cgomezhub"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="nav__icon grow"
                src={GitHubIcon}
                alt="GitHub icon"
              ></img>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
