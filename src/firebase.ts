/* eslint-disable import/no-extraneous-dependencies */
// import firebase from "firebase";
// import "firebase/firestore";
// import firebaseConfig from "./firebaseConfig";

// firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();
// firebase.ts

import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
