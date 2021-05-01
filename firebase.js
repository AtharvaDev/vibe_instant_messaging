import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkq2UqlA9swi-CvoQKhp4OEwVfvBlSuN4",
  authDomain: "vibe-by-ad.firebaseapp.com",
  databaseURL: "https://vibe-by-ad-default-rtdb.firebaseio.com",
  projectId: "vibe-by-ad",
  storageBucket: "vibe-by-ad.appspot.com",
  messagingSenderId: "441539665682",
  appId: "1:441539665682:web:3ae907cd3c0e32bd60ddcb",
  measurementId: "G-6XQBCSRC57",
};

//   as we are doing server-side rendering we need to protect our app against incase we have already intitalized the app. so we dont want to reinitialize again

// if we have already intitalized the app then go to firebase.app() or initialize with firebaseConfig
const app = !firebase.apps.length
  ? firebase.intitalizeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

