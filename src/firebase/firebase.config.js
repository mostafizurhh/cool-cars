// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9L7D_c2Wz8zjTOXP4AKrtV0CY3ypkdu0",
    authDomain: "cool-cars-3f874.firebaseapp.com",
    projectId: "cool-cars-3f874",
    storageBucket: "cool-cars-3f874.appspot.com",
    messagingSenderId: "766294663373",
    appId: "1:766294663373:web:db06a41c258f4c502e0984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app