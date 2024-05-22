import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB31K2STIfBh2RNHT0YzKRa4mN-2gFO5Rk",
  authDomain: "hearthwebsite-7047d.firebaseapp.com",
  databaseURL: "https://hearthwebsite-7047d-default-rtdb.firebaseio.com",
  projectId: "hearthwebsite-7047d",
  storageBucket: "hearthwebsite-7047d.appspot.com",
  messagingSenderId: "715450515037",
  appId: "1:715450515037:web:c5ddf2b6362c858f2f57b4",
  measurementId: "G-MZE54YVG8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app); 