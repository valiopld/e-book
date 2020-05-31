import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration

let config = {
  apiKey: "AIzaSyD7x0RQvSrX8BIS8W2TOkq61VOaaH3jDd4",
  authDomain: "e-book-b3fa1.firebaseapp.com",
  databaseURL: "https://e-book-b3fa1.firebaseio.com",
  projectId: "e-book-b3fa1",
  storageBucket: "e-book-b3fa1.appspot.com",
  messagingSenderId: "130157124058",
  appId: "1:130157124058:web:b3ce0e65374fe1e18348e3",
  measurementId: "G-2MTK3Q3R0N",
};
// Initialize Firebase

firebase.initializeApp(config);
export const firestore = firebase.firestore();
