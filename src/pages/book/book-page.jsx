import React, { useState, useEffect } from "react";

import "./book-page.css";

import { firestore } from "../../firebase/firebase.utils";

const Book = (props) => {
  const id = parseInt(props.match.params.id);
  const [getBookData, setBookData] = useState(null);
  const [getIsLoading, setIsLoading] = useState(true);
  const getDatafromFireStore = () => {
    setIsLoading(true);
    firestore
      .collection("books")
      .get()
      .then((snap) => {
        const book = snap.docs.find((bk) => bk.data().id === id);
        setBookData(book.data());
        setIsLoading(false);
      });
  };
  useEffect(getDatafromFireStore, [id]);

  const { image, rating, description } = getBookData ? getBookData : {};

  return getIsLoading ? (
    <div>LOADING :</div>
  ) : (
    <div className="book-page">
      <div className="main-book-section">
        <div className="left">
          <img alt="cover" src={image} className="cover-image" />
          <div className="addButton">Add to my Library</div>
          <div className="ratingContainer">
            <span>{rating.percent ? rating.percent : 0} %</span>
            <span>{rating.nRates} verified ratings</span>
          </div>
        </div>
        <div className="description">
          <p>Description</p>
          <span>{description}</span>
        </div>
      </div>
      <div className="reviewContainer">
        <div className="review">
          <div className="author-info">AuthorInf</div>
          <div className="review-text">Author COmment</div>
        </div>

        <div className="review">
          <div className="author-info">AuthorInf</div>
          <div className="review-text">Author COmment</div>
        </div>
        <div className="review">
          <div className="author-info">AuthorInf</div>
          <div className="review-text">Author COmment</div>
        </div>
        <div className="review">
          <div className="author-info">AuthorInf</div>
          <div className="review-text">Author COmment</div>
        </div>
      </div>
      <div className="comments-container">
        <div className="commment"></div>
        <div className="commment"></div>
        <div className="commment"></div>
        <div className="commment"></div>
      </div>
    </div>
  );
};

export default Book;
