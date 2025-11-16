import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfwucuZgnvrwgJUfTEylElYmchmrXy-es",
  authDomain: "alumni-database-fbd44.firebaseapp.com",
  projectId: "alumni-database-fbd44",
  storageBucket: "alumni-database-fbd44.firebasestorage.app",
  messagingSenderId: "381105041294",
  appId: "1:381105041294:web:de0e28997d126985f7bedf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
