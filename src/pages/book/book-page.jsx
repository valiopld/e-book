import React from "react";

import "./book-page.css";
import * as DB from "../../database/db.json";
const Book = (props) => {
  let id = parseInt(props.match.params.id);

  //-------------------------------------------------------
  let DB_OBJ = DB.default;
  let book = DB_OBJ.filter((book) => book.id === id)[0];
  //--------------------------------------------------------

  const imgUrl = book.image;
  const description = book.description;
  const percent = book.rating.percent;
  const nRates = book.rating.nRates;

  const reviews = [];
  for (let i = 0; i < 4; ++i) {
    let newReview = (
      <div key={i} className="review">
        <div className="author-info">{book.comments.prof[i].author}</div>
        <div className="review-text">{book.comments.prof[i].comment}</div>
      </div>
    );
    reviews.push(newReview);
  }
  const comments = [];
  for (let i = 0; i < 4; ++i) {
    let newComment = <div key={i} className="commment"></div>;
    comments.push(newComment);
  }
  return (
    <div className="book-page">
      <div className="main-book-section">
        <div className="left">
          <img alt="cover" src={imgUrl} className="cover-image" />
          <div className="addButton">Add to my Library</div>
          <div className="ratingContainer">
            <span>{percent}</span>
            <span>{nRates} verified ratings</span>
          </div>
        </div>
        <div className="description">
          <p>Description</p>
          <span>{description}</span>
        </div>
      </div>
      <div className="reviewContainer">{reviews}</div>
      <div className="comments-container">{comments}</div>
    </div>
  );
};

export default Book;
