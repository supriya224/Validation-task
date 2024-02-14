// import firebase, { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import "firebase/firestore";
// import "firebase/firestore";
// import "firebase/compat/firestore";
// import "firebase/compat/app";
// import * as firebase from "firebase";
// import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsmtJiBoejFRH-5xStBuJWK-p3an2AfVg",
  authDomain: "validation-task-88620.firebaseapp.com",
  databaseURL: "https://validation-task-88620-default-rtdb.firebaseio.com",
  projectId: "validation-task-88620",
  private_key_id: "8de4b9eb5038b52b42ddc0bccb4d2ff29d66b5cd",
  storageBucket: "validation-task-88620.appspot.com",
  messagingSenderId: "822944672903",
  appId: "1:822944672903:web:753a63935977e6dff91c22"
};

export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
