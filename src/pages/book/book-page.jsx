import React from "react";

import "./book-page.css";

import { firestore } from "../../firebase/firebase.utils";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.id = parseInt(props.match.params.id);

    this.state = {
      book: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    const db_books = firestore.collection("books");

    db_books.get().then((snap) => {
      const book = snap.docs.find((bk) => bk.data().id === this.id);

      book
        ? this.setState({ book: book.data(), isLoading: false })
        : this.props.history.push("/");
    });
  }
  render() {
    const { image, description, rating } = this.state.book
      ? this.state.book
      : "";
    return !this.state.isLoading ? (
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
    ) : (
      <div>LOADING:</div>
    );
  }
}

export default Book;
