// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9vxLVzq3R37IEZOUtTEVdRFPYTcBWAzA",
  authDomain: "iotive-certificates-83794.firebaseapp.com",
  projectId: "iotive-certificates-83794",
  storageBucket: "iotive-certificates-83794.firebasestorage.app",
  messagingSenderId: "575517852957",
  appId: "1:575517852957:web:8ec2f6a24e9ba2d1e64df4"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore and export
export const db = getFirestore(app);
