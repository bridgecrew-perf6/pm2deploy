import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./scss/global.scss";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Inspirasi = React.lazy(()=>import("./pages/Inspirasi/Inspirasi"))

const Alpha = () => (
  <Router>
    <React.Suspense fallback="loading...">
      <Route exact path="/" component={Home} />
      <Route path="/inspirasi" component={Inspirasi} />
    </React.Suspense>
  </Router>
);

export default Alpha;
