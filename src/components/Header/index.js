import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="row-1">
        <h1 className="logo">BookUsNow</h1>
        <div>
          <p>Categories</p>
        </div>
        <div>
          <input type="search" />
        </div>
        <div>Favorites</div>
        <button>Sign in</button>
      </div>
      <div>
        <p>location</p>
        <ul>
          <li>live shows</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
