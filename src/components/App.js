import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="header-container">
          <div className="logo" />
          <ul>
            <li>FaceBook</li>
            <li>Twitter</li>
            <li>Social</li>
            <li>Something</li>
          </ul>
        </div>
      </div>

      <div className="TopNavBar">
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
          <li>Link 5</li>
          <li>Link 6</li>
          <li>Link 7</li>
        </ul>
      </div>

      <div className="SearchBox">
        <input type="text" placeholder="Search a book..." />
      </div>

      <div className="Events"></div>
      <div className="SideMenu">
        <ul>
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
          <li>List 4</li>
          <li>List 5</li>
          <li>List 6</li>
          <li>List 7</li>
        </ul>
      </div>
      <div className="categoryList"></div>
      <div className="Footer">This is the Footer </div>
    </div>
  );
}

export default App;
