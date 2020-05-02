import React from "react";

import "./search-page.css";
import __fakeDB from "../../database/";

const SearchPage = (props) => {
  let f = props.match.params.filter;
  console.log(props);

  return <div className="search-page">YOU LOOKING FOR {f}</div>;
};
export default SearchPage;
