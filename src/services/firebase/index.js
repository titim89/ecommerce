import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDgBUJg1SZ4U_zL2Db41rdueMUIW-bIs_o",
  authDomain: "bakery-c3af0.firebaseapp.com",
  projectId: "bakery-c3af0",
  storageBucket: "bakery-c3af0.appspot.com",
  messagingSenderId: "417616296576",
  appId: "1:417616296576:web:02808f6c5423dfa3114465"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)