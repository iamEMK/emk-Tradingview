 import firebase from "firebase";
 const firebaseConfig = {
    apiKey: "AIzaSyDMFSw_kBpwA0RV25i7PIbeXj-hZR0LYJs",
    authDomain: "emk-tview.firebaseapp.com",
    projectId: "emk-tview",
    storageBucket: "emk-tview.appspot.com",
    messagingSenderId: "596935610692",
    appId: "1:596935610692:web:df22a34b8b278be87c0711",
    measurementId: "G-23K9J5J48J"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();
 const db = firebaseApp.firestore();
 const provider = new firebase.auth.GoogleAuthProvider();

 export { auth, provider};
 export default db;