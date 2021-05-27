import { Link } from "react-router-dom";

import logoIcon from "../../../images/logo.png";
import NavButton from ".././NavButton";
import "./NavigationGuest.css";

const NavigationGuest = () => {
  return (
    <div className="nav">
      <section className="navOptions">
        <span href="#">Каталог</span>
      </section>
      <section className="site-title-wrapper">
        <img src={logoIcon} alt="" />
        <Link to="/" className="site-title">
          <h1>Hiking.bg</h1>
        </Link>
      </section>
      <section className="navButtonWrapper">
        <NavButton path="/register" code="fas fa-user-plus">
          РЕГИСТРАЦИЯ
        </NavButton>
        <NavButton path="/login" code="fas fa-sign-in-alt">
          ВХОД
        </NavButton>
      </section>
    </div>
  );
};

export default NavigationGuest;
