import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Article from "./pages/Home/Article";
import "./scss/global.scss";

const Home = React.lazy(() => import("./pages/Home/Home"));

const App = () => (
  <Router>
    <React.Suspense fallback="loading...">
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/article"
        component={(props) => <Article {...props} />}
      />
      <Route
        exact
        path="/article/:id"
        component={(props) => <Article {...props} />}
      />
      <br />
      <hr />
      <h2>Link:</h2>
      <ul>
        <li>
          <Link to="/article">Aricle List</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </React.Suspense>
  </Router>
);

export default App;
