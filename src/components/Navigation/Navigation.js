import { useContext, useEffect, useState } from "react";

import NavigationGuest from "./NavigationGuest";
import NavigationUser from "./NavigationUser";
import "./Navigation.css";

const Navigation = (props) => {
  return props.token ? <NavigationUser /> : <NavigationGuest />;
};

export default Navigation;
