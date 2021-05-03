import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./scss/global.scss";

const Home = React.lazy(() => import("./pages/Home/Home"));
const BmHome = React.lazy(() => import("./pages/BukanMain20/BmHome"));

const App = () => (
  <Router>
    <React.Suspense fallback="loading...">
      <Route exact path="/" component={Home} />
      <Route exact path="/bukan-main-20" component={BmHome} />
    </React.Suspense>
  </Router>
);

export default App;
