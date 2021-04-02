import Rebase from "re-base";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBb1nHG7eKnN9I5NHz8HZUCvOyGrfbKHV8",
  authDomain: "learning-react-again.firebaseapp.com",
  databaseURL: "https://learning-react-again-default-rtdb.firebaseio.com",
  projectId: "learning-react-again",
  storageBucket: "learning-react-again.appspot.com",
  messagingSenderId: "498983559744",
  appId: "1:498983559744:web:4b9db7c0daf2bbd6a6f5a5",
  measurementId: "G-KTXPM36TSJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
