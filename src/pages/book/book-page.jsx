import React from "react";

import "./book-page.css";

const Book = () => {
  return (
    <div className="book-page">
      <div className="main-book-section">
        <div className="left">
          <div className="cover-image" />
          <div className="addButton">Add to my Library</div>
          <div className="ratingContainer">
            <span>85%</span>
            <span>120 verified ratings</span>
          </div>
        </div>
        <div className="description">
          <p>Description</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </span>
        </div>
      </div>
      <div className="reviewContainer">
        <div className="review">
          <div className="author-info">Valentin Peshev</div>
          <div className="review-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat ...
          </div>
        </div>
        <div className="review">
          <div className="author-info">Ivelina Ivanova</div>
          <div className="review-text">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia ...
          </div>
        </div>
        <div className="review">
          <div className="author-info">Valentin Peshev</div>
          <div className="review-text">
            Dolor magna eget est lorem ipsum dolor sit amet consectetur. Quis
            vel eros donec ac. Tortor aliquam nulla facilisi cras fermentum odio
            eu feugiat pretium. Massa enim nec dui nunc mattis enim ut tellus
            elementum ...
          </div>
        </div>
        <div className="review">
          <div className="author-info">Valentin Peshev</div>
          <div className="review-text">
            Tortor aliquam nulla facilisi cras fermentum odio eu feugiat
            pretium. Massa enim nec dui nunc mattis enim ut tellus elementum.
            Adipiscing enim eu turpis egestas pretium aenean. Venenatis lectus
            magna fringilla urna porttitor rhoncus....
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
