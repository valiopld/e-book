import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Main.css";

import HomePage from "../../pages/home/home-page";
import GenresPage from "../../pages/genres/genres-page";
import AuthorsPage from "../../pages/authors/authors-page";
import AboutPage from "../../pages/about/about-page";

import BookPage from "../../pages/book/book-page";
import SearchPage from "../../pages/search/search-page";

import AddBook from "../../pages/addBook/addBook";
export const Main = () => {
  return (
    <div className="Main">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/genres" component={GenresPage} />
        <Route path="/authors" component={AuthorsPage} />
        <Route path="/about" component={AboutPage} />

        <Route path="/book/:id" component={BookPage} />
        <Route path="/search/:filter" component={SearchPage} />

        <Route path="/secure-add-book" component={AddBook} />
      </Switch>
    </div>
  );
};
