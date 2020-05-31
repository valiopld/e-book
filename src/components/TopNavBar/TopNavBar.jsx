import React from "react";
import { Link } from "react-router-dom";
import "./TopNavBar.css";

export const TopNavBar = () => {
  return (
    <div className="TopNavBar">
      <ul>
        <Link to="/">
          <li>Начало</li>
        </Link>
        <Link to="/genres">
          <li>Жанрове</li>
        </Link>
        <Link to="/authors">
          <li>Автори</li>
        </Link>
        <Link to="/about">
          <li>За нас</li>
        </Link>
      </ul>
    </div>
  );
};
