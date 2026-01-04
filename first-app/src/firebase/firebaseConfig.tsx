import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyANURof3uOK1eNlk1TlWOt2O-o63Fnc22w",
  authDomain: "light-controller-e8bfb.firebaseapp.com",
  databaseURL: "https://light-controller-e8bfb-default-rtdb.firebaseio.com",
  projectId: "light-controller-e8bfb",
  storageBucket: "light-controller-e8bfb.firebasestorage.app",
  messagingSenderId: "610282601818",
  appId: "1:610282601818:web:c72d76b4791b5a1e8d4763",
  measurementId: "G-ES9YDMFTTD",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
