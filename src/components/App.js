import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { Header } from "./Header/Header";
import { TopNavBar } from "./TopNavBar/TopNavBar";
import { EventBar } from "./EventBar/EventBar";
import { SideMenu } from "./SideMenu/SideMenu";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { firestore } from "../firebase/firebase.utils";
function App() {
  const db_books = firestore.collection("books");

  db_books.get().then((snap) => snap.docs.map((bk) => console.log(bk.data())));

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
