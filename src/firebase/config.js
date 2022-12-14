import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFkMSSqurG_tWBopVFZtrhtEdUjpSnfzE",
  authDomain: "vue-blog-test-4ea9e.firebaseapp.com",
  projectId: "vue-blog-test-4ea9e",
  storageBucket: "vue-blog-test-4ea9e.appspot.com",
  messagingSenderId: "802067532817",
  appId: "1:802067532817:web:c50c34e2b8e23f5e8775b0",
};

// init firebase
firebase.initializeApp(firebaseConfig);

//database setup
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };
