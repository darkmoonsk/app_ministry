// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    setPersistence,
    browserLocalPersistence,
    onAuthStateChanged
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: "ministry-c26e8.firebaseapp.com",
//   projectId: process.env.PROJECT_ID,
//   storageBucket: "ministry-c26e8.appspot.com",
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyDxn2oTpuRYEd90Kt8b4CNPPJmGE9tKmLc",
    authDomain: "ministry-c26e8.firebaseapp.com",
    projectId: "ministry-c26e8",
    storageBucket: "ministry-c26e8.appspot.com",
    messagingSenderId: "854867276950",
    appId: "1:854867276950:web:fee7d49022fb6e753a7eb7",
    measurementId: "G-5VTY0BHE3T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
(async () => {
    await setPersistence(auth, browserLocalPersistence);
})();

// const analytics = getAnalytics(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
