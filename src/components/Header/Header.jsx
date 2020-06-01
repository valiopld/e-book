import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import SearchBar from "../SearchBar/SearchBar";
export const Header = () => {
  return (
    <div className="Header">
      <div className="header-inside">
        <Link to="/">
          <div className="logo" />
        </Link>
        <SearchBar />
        <ul>
          <li>FaceBook</li>
          <li>Twitter</li>
          <li>BLOG</li>
        </ul>
      </div>
    </div>
  );
};
