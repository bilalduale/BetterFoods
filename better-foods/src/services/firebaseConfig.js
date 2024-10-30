import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBSyRixRWnwq_r0bVg7Bj8s4mIACxK6AU",
  authDomain: "info442-3747c.firebaseapp.com",
  projectId: "info442-3747c",
  storageBucket: "info442-3747c.appspot.com",
  messagingSenderId: "380869913398",
  appId: "1:380869913398:web:f39a7c31e0494229dca197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
