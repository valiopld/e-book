import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { Header } from "./Header/Header";
import { TopNavBar } from "./TopNavBar/TopNavBar";
import { EventBar } from "./EventBar/EventBar";
import { SideMenu } from "./SideMenu/SideMenu";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <EventBar />
        <TopNavBar />
        <SideMenu />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
