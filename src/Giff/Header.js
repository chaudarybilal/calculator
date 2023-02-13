import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div class="header">
        <a href="#default" class="logo">
          GIPHY
        </a>
        <div class="header-right">
          <a class="active" href="/">
            <Link to="/home">Home</Link>
          </a>
          <a href="/">
            <Link to="/about">Favourite</Link>
          </a>
          <a href="/">
            <Link to="/contact">FeedBack</Link>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
