import React from "react";

import "./Header.css";

export const Header = () => {
  return (
    <div className="Header">
      <div className="header-inside">
        <div className="logo" />
        <ul>
          <li>FaceBook</li>
          <li>Twitter</li>
          <li>Social</li>
          <li>Something</li>
        </ul>
      </div>
    </div>
  );
};
