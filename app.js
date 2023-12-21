import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDQJqHErI8UnT0ZSujldpcu051hFYaEGHs",
    authDomain: "newproj-636ee.firebaseapp.com",
    projectId: "newproj-636ee",
    storageBucket: "newproj-636ee.appspot.com",
    messagingSenderId: "867265352236",
    appId: "1:867265352236:web:03b1213bad5e5fb778f789",
    measurementId: "G-26EW8YLSK3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  