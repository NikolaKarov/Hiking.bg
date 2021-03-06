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
import Catalogue from "./components/Catalogue";
import DetailPost from "./components/DetailPost";
import EditPost from "./components/EditPost";
import Create from "./components/Create";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("authToken"));
  return (
    <div className="app">
      <TokenContext.Provider value={setToken}>
        <Navigation token={token} />
        <main>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/Hiking.bg/" exact component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/Hiking.bg/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/Hiking.bg/register" component={Register} />
            <Route path="/catalogue" render={() => <Catalogue type="all"></Catalogue>} />
            <Route path="/Hiking.bg/catalogue" render={() => <Catalogue type="all"></Catalogue>} />
            <Route path="/details/:id" component={DetailPost} />
            <Route path="/Hiking.bg/details/:id" component={DetailPost} />
            <Route path="/edit/:id" component={EditPost} />
            <Route path="/Hiking.bg/edit/:id" component={EditPost} />
            <Route path="/create" component={Create} />
            <Route path="/Hiking.bg/create" component={Create} />
            <Route path="/my-posts" render={() => <Catalogue type="user"></Catalogue>} />
            <Route path="/Hiking.bg/my-posts" render={() => <Catalogue type="user"></Catalogue>} />
          </Switch>
          <Aside />
        </main>
        <Footer />
      </TokenContext.Provider>
      <div className="notifications">
        <div id="errorBox" className="notification">
          <span>warning</span>
        </div>
      </div>
    </div>
  );
}

export default App;
