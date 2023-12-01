import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5DdEEq8dh-yR7Q-Yqp2hfV5_J2KP5nvI",
    authDomain: "delivery-d65cb.firebaseapp.com",
    projectId: "delivery-d65cb",
    storageBucket: "delivery-d65cb.appspot.com",
    messagingSenderId: "239442715787",
    appId: "1:239442715787:web:8703ff110c914ebc6d208e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    app,
    db,
};