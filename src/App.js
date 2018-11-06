import React, { Suspense, lazy } from "react";
import "./scss/global.scss";
import { AnimatedSwitch } from "react-router-transition";
import { Route, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";
// import ProductList from "./pages/ProductList";
import Header from "./components/Header/Header";

const ProductList = lazy(() => import("./pages/ProductList"));

const App = () => (
  <>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="router__wrapper"
      >
        {/* <Switch> */}
        <Route exact path="/" component={Dashboard} />
        <Route path="/product" render={() => <ProductList />} />
        <Route path="/login" component={Login} />
        <Route path="/list" component={Login} />
        <Route path="/404" component={Error404} />
        <Route render={() => <Redirect to="/404" />} />
        {/* </Switch> */}
      </AnimatedSwitch>
    </Suspense>
  </>
);

export default App;
