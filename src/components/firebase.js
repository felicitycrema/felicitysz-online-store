import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ-JZleYNGz1GFyRHmkW_ofIA23ZkRPGg",
  authDomain: "my-commercial-store.firebaseapp.com",
  projectId: "my-commercial-store",
  storageBucket: "my-commercial-store.appspot.com",
  messagingSenderId: "191062510139",
  appId: "1:191062510139:web:7f07ae23ce6a315dc46a1e",
  measurementId: "G-81ZS9VP90B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
