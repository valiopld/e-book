import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "../pages/home/home-page";
import SearchPage from "../pages/search/search-page";

import { Header } from "./Header/Header";
import { TopNavBar } from "./TopNavBar/TopNavBar";
import SearchBar from "./SearchBar/SearchBar";
import { EventBar } from "./EventBar/EventBar";
import { SideMenu } from "./SideMenu/SideMenu";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <TopNavBar />
        <SearchBar />
        <EventBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search/:filter" component={SearchPage} />
        </Switch>
        <SideMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
