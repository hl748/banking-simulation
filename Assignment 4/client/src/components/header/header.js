import React from "react";
import "./header.css"

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
        <li>
          <a href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="/signuppage">Sign Up</a>
        </li>
        <li>
          <a href="/signuppage">Login</a>
        </li>
        <li>
          <a href="/dboard">Dashboard</a>
        </li>
      </ul>
    );
  }
}

export default Header;
