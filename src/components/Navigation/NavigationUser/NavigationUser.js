import { useContext } from "react";
import { Link } from "react-router-dom";

import { logout } from "../../../services/data";
import TokenContext from "../../../context/TokenContext";
import logoIcon from "../../../images/logo.png";
import NavButton from ".././NavButton";
import "./NavigationUser.css";

const NavigationUser = () => {
  const setToken = useContext(TokenContext);
  const user = sessionStorage.getItem("username");

  const onClickHandler = async () => {
    await logout();
    setToken(sessionStorage.getItem("authToken"));
  };

  return (
    <div className="nav">
      <section className="navOptions">
        <Link to="/catalogue">
          <span>Каталог</span>
        </Link>
        <Link to="/my-posts">
          <span>Моите постове</span>
        </Link>
        <Link to="/create">
          <span>Създай пост</span>
        </Link>
      </section>
      <section className="site-title-wrapper">
        <img src={logoIcon} alt="" />
        <Link to="/" className="site-title">
          <h1>Hiking.bg</h1>
        </Link>
      </section>
      <section className="navButtonWrapper">
        <p>{`Добре дошъл, ${user}`}</p>
        <NavButton onClick={onClickHandler} path="/" code="fas fa-sign-out-alt">
          ИЗХОД
        </NavButton>
      </section>
    </div>
  );
};

export default NavigationUser;
