import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar justify-content-center">
        <li className="nav-item nav-link">
          <Link to="/">Top Games</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/top-streams">Top Streams</Link>
        </li>
      </nav>
    </div>
  );
}

export default Header;
