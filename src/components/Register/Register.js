import { useContext } from "react";
import { Link } from "react-router-dom";

import "./Register.css";
import TokenContext from "../../../src/context/TokenContext";
import { register } from "../../services/data";

const Register = ({ history }) => {
  const setToken = useContext(TokenContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const rePass = formData.get("repass");

    await register(`${username}@123.123`, username, password);
    setToken(sessionStorage.getItem("authToken"));
    history.push("/");
  };
  return (
    <div className="register-form-wrapper">
      <form onSubmit={onSubmitHandler} className="register-form">
        <div>
          <i className="fas fa-user"></i>
          <input id="registerUsername" type="text" placeholder="потребителско име" name="username" />
        </div>
        <div>
          <i className="fas fa-key"></i>
          <input id="registerPassword" type="password" placeholder="парола" name="password" />
        </div>
        <div>
          <i className="fas fa-key"></i>
          <input id="repeatPassword" type="password" placeholder="повтори парола" name="repass" />
        </div>
        <button className="createBtn">РЕГИСТРАЦИЯ</button>
        <p className="message">
          Имате регистация?{" "}
          <Link to="/login" className="regToggle">
            Влезте в профила си
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
