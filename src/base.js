import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBquP90thkYU2YsPu32Q_FCKzFNI8-HvTw",
  authDomain: "danny-react-project.firebaseapp.com",
  databaseURL: "https://danny-react-project.firebaseio.com",
  projectId: "danny-react-project",
  storageBucket: "danny-react-project.appspot.com",
  messagingSenderId: "598896441777",
  appId: "1:598896441777:web:02b67106bf2c32cbe4a590"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebase };

export default base;
