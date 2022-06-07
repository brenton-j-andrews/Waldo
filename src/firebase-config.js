import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAcMzulIeFjGVfG_6IVt8xzPfsqGliCPAg",
  authDomain: "waldo-213da.firebaseapp.com",
  projectId: "waldo-213da",
  storageBucket: "waldo-213da.appspot.com",
  messagingSenderId: "969324456528",
  appId: "1:969324456528:web:b295f8413c2db35f37bf55"
};


firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };