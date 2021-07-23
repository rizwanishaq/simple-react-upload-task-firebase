import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_F56gPsPmi4scpsAAIyWT034g7hgp5LM",
  authDomain: "notes-f4eb0.firebaseapp.com",
  databaseURL:
    "https://notes-f4eb0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "notes-f4eb0",
  storageBucket: "notes-f4eb0.appspot.com",
  messagingSenderId: "414362566477",
  appId: "1:414362566477:web:85da560757312faf8f8104",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();
const notesRef = databaseRef.child("notes");
const storage = firebase.storage();

export { storage, notesRef };
export default firebase;
