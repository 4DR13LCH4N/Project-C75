import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBcQEBWLBYXUy-Z1SEXVtf7QEeeGq7rkRQ",
  authDomain: "e-ride-b331e.firebaseapp.com",
  projectId: "e-ride-b331e",
  storageBucket: "e-ride-b331e.appspot.com",
  messagingSenderId: "886070264700",
  appId: "1:886070264700:web:773fd305d92e4adf1d5af9"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
