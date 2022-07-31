import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYJHmnCpVehlENw9EU7_FkTbNDmM5ROf8",
  authDomain: "linkedin-clone-1e474.firebaseapp.com",
  projectId: "linkedin-clone-1e474",
  storageBucket: "linkedin-clone-1e474.appspot.com",
  messagingSenderId: "733934821426",
  appId: "1:733934821426:web:14804d46ed72f46790dc2b",
  measurementId: "G-W55WYM9QXV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };