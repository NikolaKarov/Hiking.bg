import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";

import "./App.css";
import TokenContext from "../src/context/TokenContext";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("authToken"));
  return (
    <div className="app">
      <TokenContext.Provider value={setToken}>
        <Navigation token={token} />
        <main>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
          <Aside />
        </main>
        <Footer />
      </TokenContext.Provider>
    </div>
  );
}

export default App;
