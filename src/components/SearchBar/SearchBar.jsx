import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

import { firestore } from "../../firebase/firebase.utils";

const SearchBar = () => {
  const [getFinded, setFinded] = useState([]);
  const search = (event) => {
    const searchValue = event.target.value;

    if (searchValue.length > 3) {
      firestore
        .collection("books")
        .get()
        .then((snap) => {
          const bookArray = snap.docs.filter((bk) => {
            return bk
              .data()
              .name.toLowerCase()
              .includes(searchValue.toLowerCase());
          });
          if (bookArray.length > 0) {
            setFinded(bookArray.map((a) => a.data()));
          }
        });
    } else {
      setFinded([]);
    }
  };
  return (
    <div className="search-bar">
      <input type="text" onChange={search} placeholder="Search a book..." />
      <div className="lupa"></div>
      <ul className="SugBox">
        {getFinded.map((a) => {
          let x = `ID: ${a.id}, Name: ${a.name}, Author: ${a.author} `;

          return (
            <Link onClick={() => setFinded([])} to={`/book/${a.id}`} key={a.id}>
              {x}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
