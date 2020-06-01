import React from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";
import __fakeDB from "../../database";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { filter: "" };
  }

  adding = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    let allBooks;
    if (this.state.filter !== "") {
      allBooks = __fakeDB
        .filter((b, i) => {
          return (
            b.name.toLowerCase().includes(this.state.filter.toLowerCase()) ||
            b.author.toLowerCase().includes(this.state.filter.toLowerCase())
          );
        })
        .map((a, i) => {
          let x = `ID: ${a.ID}, Name: ${a.name}, Author: ${a.author} `;

          return (
            <Link to={a.link} key={a.ID}>
              {x}
            </Link>
          );
        })
        .filter((a, c) => c < 5);
      allBooks.unshift(
        <Link
          to={`/search/${this.state.filter.replace(/\s/g, "-")}`}
          key="custom"
        >
          Custom Search: {this.state.filter}
        </Link>
      );
    }
    return (
      <div className="SearchBar">
        <input
          type="text"
          onChange={this.adding}
          placeholder="Search a book..."
        />
        <div className="lupa"></div>
        <ul className="SugBox">{allBooks}</ul>
      </div>
    );
  }
}
export default SearchBar;
