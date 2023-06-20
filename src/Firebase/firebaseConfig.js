import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAByPkaNCVQ58Kh2zXH_x9ENeAGsEqaZEc",
  authDomain: "deliveryfood-c7741.firebaseapp.com",
  projectId: "deliveryfood-c7741",
  storageBucket: "deliveryfood-c7741.appspot.com",
  messagingSenderId: "413592129944",
  appId: "1:413592129944:web:13f4cc01cda44752105bed",
  measurementId: "G-Q4BWMK8ZMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);











