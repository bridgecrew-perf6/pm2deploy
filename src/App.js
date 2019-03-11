import React, { Suspense, lazy } from "react";
import "./scss/global.scss";
import { AnimatedSwitch } from "react-router-transition";
import { Route, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";
import ProductList from "./pages/ProductList";
import Header from "./components/Header/Header";
import ACS from "./templates/ACS/ACS";
import withSizmekTracker from "./templates/Tracker/SizmekTracker";

// const ProductList = lazy(() => import("./pages/ProductList"));
const ProductList2 = lazy(() => import("./pages/ProductList2"));

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
        <Route exact path="/" component={withSizmekTracker(Dashboard)} />
        <Route path="/acs" component={ACS} />
        <Route path="/product" render={() => <ProductList />} />
        <Route path="/product2" render={() => <ProductList2 />} />
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
