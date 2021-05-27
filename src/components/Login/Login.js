import { useContext } from "react";
import { Link } from "react-router-dom";

import "./Login.css";
import TokenContext from "../../../src/context/TokenContext";
import { login } from "../../services/data";

const Login = ({ history }) => {
  const setToken = useContext(TokenContext);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    await login(username, password);
    setToken(sessionStorage.getItem("authToken"));
    history.push("/");
  };

  return (
    <div className="login-form-wrapper">
      <form onSubmit={onSubmitHandler} className="login-form">
        <div>
          <i className="fas fa-user"></i>
          <input id="loginUsername" type="text" placeholder="потребителско име" name="username" />
        </div>
        <div>
          <i className="fas fa-key"></i>
          <input id="loginPassword" type="password" placeholder="парола" name="password" />
        </div>
        <button>ВХОД</button>
        <p className="message">
          Нямате регистрация?
          <Link to="/register">Създай профил</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
