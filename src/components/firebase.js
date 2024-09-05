import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCurEiHJJT_joSIOGSLHM_ava08tchyn9M",
  authDomain: "app-dcd70.firebaseapp.com",
  projectId: "app-dcd70",
  storageBucket: "app-dcd70.appspot.com",
  messagingSenderId: "557758357982",
  appId: "1:557758357982:web:d539e68d21afd471b5bd4f",
  measurementId: "G-7231J4RWGH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
