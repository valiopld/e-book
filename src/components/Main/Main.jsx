import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Main.css";

import HomePage from "../../pages/home/home-page";
import SearchPage from "../../pages/search/search-page";
import Book from "../../pages/book/book-page";

export const Main = () => {
  return (
    <div className="Main">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search/:filter" component={SearchPage} />
        <Route path="/book" component={Book} />
      </Switch>
    </div>
  );
};
