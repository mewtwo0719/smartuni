import firebase from 'firebase'

import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLflbxZkDfRiT1d16tiEqQ8h3bzolKXv0",
    authDomain: "smart-university-f745f.firebaseapp.com",
    projectId: "smart-university-f745f",
    storageBucket: "smart-university-f745f.appspot.com",
    messagingSenderId: "1070939114328",
    appId: "1:1070939114328:web:ecf96ea2e89c3207b0f32d",
    measurementId: "G-0CTTD2LEYC"
  };
  // eslint-disable-next-line
  export const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider }
  export default db;

  