import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCov37P6iaeEQkLTDb0OsB0a9NvGlbb_Sg",
    authDomain: "intracon-profile.firebaseapp.com",
    projectId: "intracon-profile",
    storageBucket: "intracon-profile.appspot.com",
    messagingSenderId: "85337348930",
    appId: "1:85337348930:web:88ef89ac550e0d8ab3c6db",
    measurementId: "G-P5EFGRSSM0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;