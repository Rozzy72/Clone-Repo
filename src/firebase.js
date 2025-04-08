// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBpNp1WREVq-yyPFPu-aHIq1DhnRvZJ5hQ",
//   authDomain: "mayofire-5ecbe.firebaseapp.com",
//   projectId: "mayofire-5ecbe",
//   storageBucket: "mayofire-5ecbe.firebasestorage.app",
//   messagingSenderId: "345036154808",
//   appId: "1:345036154808:web:bd6320db2b154f4ddfd14d",
//   measurementId: "G-PDL2T7YRG6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyBpNp1WREVq-yyPFPu-aHIq1DhnRvZJ5hQ",
    authDomain: "mayofire-5ecbe.firebaseapp.com",
    projectId: "mayofire-5ecbe",
    storageBucket: "mayofire-5ecbe.firebasestorage.app",
    messagingSenderId: "345036154808",
    appId: "1:345036154808:web:bd6320db2b154f4ddfd14d",
    measurementId: "G-PDL2T7YRG6"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);