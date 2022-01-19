import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
// import RTL from "layouts/RTL.js";
import Login from "views/Login/Login.js";
import Register from "views/Register/Register.js";
import Home from "main/Home/Home.js";
//meu cc
import "index.css";

// import "assets/css/material-dashboard-react.css?v=1.10.0";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} exact/>
      <Route path="/register" component={Register} exact/>
      <Redirect from="/home" to="/" />
      {/* <Route path="/rtl" component={RTL} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
