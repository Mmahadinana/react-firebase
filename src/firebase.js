import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCcq2hZzHZBVlto1-U-gKpyeLzjKk5A4z8",
  authDomain: "fir-authentication-2251b.firebaseapp.com",
  databaseURL: "https://fir-authentication-2251b.firebaseio.com",
  projectId: "fir-authentication-2251b",
  storageBucket: "fir-authentication-2251b.appspot.com",
  messagingSenderId: "889518745667",
  appId: "1:889518745667:web:5aa0cb302785dd16598cf6",
  measurementId: "G-RXBTBM210D"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
