import { initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyADS6ETwm7DcKAAl8Az4JqKzs8b3b2lLSU",
  authDomain: "travelgram-2b280.firebaseapp.com",
  projectId: "travelgram-2b280",
  storageBucket: "travelgram-2b280.appspot.com",
  messagingSenderId: "310609787056",
  appId: "1:310609787056:web:0337bfebe0fe2e1f972375"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

const auth = getAuth()
const storage = firebase.storage()
const provider = new GoogleAuthProvider()

export {db, auth, storage, provider}