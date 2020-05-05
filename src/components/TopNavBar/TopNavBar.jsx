import React from "react";
import { Link } from "react-router-dom";
import "./TopNavBar.css";

export const TopNavBar = () => {
  return (
    <div className="TopNavBar">
      <ul>
        <Link to="/book">
          <li>Link 1</li>
        </Link>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
        <li>Link 5</li>
        <li>Link 6</li>
        <li>Link 7</li>
      </ul>
    </div>
  );
};
