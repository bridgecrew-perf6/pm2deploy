import React from "react";
import "./scss/global.scss";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";
import ProductList from "./pages/ProductList";
import Header from "./components/Header/Header";

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/product" component={ProductList} />
      <Route path="/login" component={Login} />
      <Route path="/list" component={Login} />
      <Route component={Error404} />
    </Switch>
  </>
);

export default App;
