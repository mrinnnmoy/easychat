import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkztQzbfoZY-33OzbUvvIUgUVhb7vi4fI",
  authDomain: "easychat-f896a.firebaseapp.com",
  projectId: "easychat-f896a",
  storageBucket: "easychat-f896a.appspot.com",
  messagingSenderId: "7540521743",
  appId: "1:7540521743:web:321a250f675b6c8cb55c7a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();