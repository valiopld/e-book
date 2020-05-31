import React from "react";
import { firestore } from "../../firebase/firebase.utils";

class AddBook extends React.Component {
  state = {
    bookname: "",
    bookauthor: "",
    booktIMG: "",
    description: "",
    theObject: {},
  };

  addToDB = (bookObj) => {
    firestore
      .collection("books")
      .add(bookObj)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  createObject = () => {
    const name = this.state.bookname;
    const author = this.state.bookauthor;
    const image = this.state.booktIMG;
    const description = this.state.description;
    const id = 1204;

    const rating = {
      nRates: 0,
      percent: null,
    };

    const comments = {
      prof: [],
      users: [],
    };
    return {
      id,
      name,
      author,
      image,
      description,
      rating,
      comments,
    };
  };
  render() {
    return (
      <div className="add-book-page">
        Book Name:
        <input
          id="name"
          onChange={(e) => this.setState({ bookname: e.target.value })}
          type="text"
        ></input>
        Book Author:
        <input
          id="author"
          onChange={(e) => this.setState({ bookauthor: e.target.value })}
          type="text"
        ></input>
        image URL :
        <input
          id="image"
          onChange={(e) => this.setState({ booktIMG: e.target.value })}
          type="text"
        ></input>
        description:
        <input
          id="description"
          onChange={(e) => this.setState({ description: e.target.value })}
          type="text"
        ></input>
        <button id="add" onClick={() => this.addToDB(this.state.theObject)}>
          Add
        </button>
        <button
          id="add"
          onClick={() =>
            this.setState({
              theObject: this.createObject(),
            })
          }
        >
          Create Object
        </button>
        <br />
        <textarea
          readOnly
          value={JSON.stringify(this.state.theObject, null, 2)}
          rows="20"
          cols="80"
        />
      </div>
    );
  }
}
export default AddBook;
