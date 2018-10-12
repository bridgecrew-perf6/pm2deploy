import React from "react";
import { Link } from "react-router-dom";

const navigationList = [
  {
    index: 1,
    name: "Home",
    to: "/"
  },
  {
    index: 2,
    name: "Login",
    to: "/login"
  },
  {
    index: 3,
    name: "Cart",
    to: "/cart"
  }
];

const Header = () => (
  <div>
    {navigationList.map(item => (
      <Link key={item.index} to={item.to}>
        {item.name}
      </Link>
    ))}
  </div>
);

export default Header;
