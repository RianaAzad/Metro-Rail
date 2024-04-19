
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC7vii1SVjq85c1soJvXXSXi_GdzPdAfYQ",
  authDomain: "metro-rail-7c0de.firebaseapp.com",
  projectId: "metro-rail-7c0de",
  storageBucket: "metro-rail-7c0de.appspot.com",
  messagingSenderId: "262014220862",
  appId: "1:262014220862:web:13d028ce50b22f1a8e6f6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth();