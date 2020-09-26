import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCTXNfKvvP5vr1WyLAfzXhc7XKY2LaHUgk",
  authDomain: "react-slack-clone-b6507.firebaseapp.com",
  databaseURL: "https://react-slack-clone-b6507.firebaseio.com",
  projectId: "react-slack-clone-b6507",
  storageBucket: "react-slack-clone-b6507.appspot.com",
  messagingSenderId: "443027828895",
  appId: "1:443027828895:web:82eda7dea328a6fcf032aa",
  measurementId: "G-BQTLEBC6BW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
