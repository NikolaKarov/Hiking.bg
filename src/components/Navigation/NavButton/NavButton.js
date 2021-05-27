import { Link } from "react-router-dom";

import "./NavButton.css";

const NavButton = (props) => {
  return (
    <Link to={props.path} className="nav-button-wrapper">
      <button onClick={props.onClick} className="nav-button">
        <i className={props.code}></i>
        {props.children}
      </button>
    </Link>
  );
};

export default NavButton;
