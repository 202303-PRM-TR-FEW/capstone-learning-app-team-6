import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJU74bWOYzwdIDM_0IXoBRnIrWQEYRNbY",
  authDomain: "capstone-team-6-1ff18.firebaseapp.com",
  projectId: "capstone-team-6-1ff18",
  storageBucket: "capstone-team-6-1ff18.appspot.com",
  messagingSenderId: "690382240461",
  appId: "1:690382240461:web:f8d6355c919bcf2a198784",
  measurementId: "G-PKN15Z2GXT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
