import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1SBH0ZQ-tRl0faSk6b8Cfxe75rVW-wl4",
    authDomain: "clone-9c980.firebaseapp.com",
    projectId: "clone-9c980",
    storageBucket: "clone-9c980.appspot.com",
    messagingSenderId: "699994645886",
    appId: "1:699994645886:web:e00173c3d18cc2f78bff2f",
    measurementId: "G-3XM7DW5Y8W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth}