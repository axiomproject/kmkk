import { Link } from "react-router-dom";
import "../styles/Header.css";
import PathConstants from "../routes/pathConstants";
import logo from "../img/kmlogo.png";

export default function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to={PathConstants.HOME}>
          <img src={logo} alt="KM Logo" className="logo-image" />
        </Link>
      </div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item dropdown">
            <div className="nav-link-about">
              About Us <span className="dropdown-arrow">&#9662;</span>
            </div>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-link" to={PathConstants.STORY}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="dropdown-link" to={PathConstants.PARTNER}>
                  Partners and Sponsors
                </Link>
              </li>
              <li>
                <Link className="dropdown-link" to={PathConstants.TEAM}>
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link className="dropdown-link" to={PathConstants.EVENTS}>
                  Events
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={PathConstants.LIFE}>
              Life with KM
            </Link>
          </li>
          <li className="nav-item dropdown">
            <div className="nav-link-testimonials">
              Testimonials <span className="dropdown-arrow">&#9662;</span>
            </div>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-link" to={PathConstants.GRAD}>
                  Our Graduates
                </Link>
              </li>
              <li>
                <Link className="dropdown-link" to={PathConstants.COMMUNITY}>
                  Our Community
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={PathConstants.HELP}>
              How can you help?
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={PathConstants.CONTACT}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="actions-container">
        <Link to={PathConstants.HOME} className="signup-button sign-up">Sign Up</Link>
         <Link to="/help?tab=donate" className="donate-button donate">Donate</Link>
      </div>
    </header>
  );
}