// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzBXzBWzXKxfR9K_aWAK_MEhlgKXh86-Q",
  authDomain: "try-vue-92d54.firebaseapp.com",
  projectId: "try-vue-92d54",
  storageBucket: "try-vue-92d54.appspot.com",
  messagingSenderId: "462401837028",
  appId: "1:462401837028:web:06e4fd0293f666de2f99f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const projectFirestore = firebase.firestore();
export { projectFirestore };
