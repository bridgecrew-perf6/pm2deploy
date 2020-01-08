import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./scss/global.scss";

const Home = React.lazy(() => import("./pages/Home/Home"));

const App = () => (
  <Router>
    <React.Suspense fallback="loading...">
      <Route exact path="/" component={Home} />
    </React.Suspense>
  </Router>
);

export default App;
