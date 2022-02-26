import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD77wtalTat7CTEV5xmmIyKD2E2GIBo-kA",
  authDomain: "disney-plus-clone-1dd5d.firebaseapp.com",
  projectId: "disney-plus-clone-1dd5d",
  storageBucket: "disney-plus-clone-1dd5d.appspot.com",
  messagingSenderId: "17215247952",
  appId: "1:17215247952:web:f04a3d8020283fd9212355",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
