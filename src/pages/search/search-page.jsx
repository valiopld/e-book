import React from "react";

import "./search-page.css";
//import __fakeDB from "../../database/";

const SearchPage = (props) => {
  let f = props.match.params.filter;
  console.log(props);

  return (
    <div className="search-page">
      <h1>
        YOU LOOKING FOR:
        <span>{f}</span>
      </h1>
    </div>
  );
};
export default SearchPage;
