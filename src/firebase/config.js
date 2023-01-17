import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD49AZ4rj3ZJEW_3S8fDkgwfV1HvtBls2Q",
  authDomain: "journalajj.firebaseapp.com",
  projectId: "journalajj",
  storageBucket: "journalajj.appspot.com",
  messagingSenderId: "370316892382",
  appId: "1:370316892382:web:7b6e23cd34200f69468a4f",
};

//init firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

export { db };
