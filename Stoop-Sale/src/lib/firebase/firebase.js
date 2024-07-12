import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// firebase config for current hakathon
const firebaseConfig = {
  apiKey: "AIzaSyDMxgd7wPkhEL8WkzY-2jKP-CBILomUEWI",
  authDomain: "hackathon-codedex-2024.firebaseapp.com",
  projectId: "hackathon-codedex-2024",
  storageBucket: "hackathon-codedex-2024.appspot.com",
  messagingSenderId: "630622976207",
  appId: "1:630622976207:web:e0719d2b8f01ddb0ea9fba"
};

// Initialize Firebase
let app;

if(!getApps().length){
    app = initializeApp(firebaseConfig);
}
else{
    app = getApps()[0]
}

const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { app, db, auth, storage };
