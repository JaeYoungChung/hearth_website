import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyB31K2STIfBh2RNHT0YzKRa4mN-2gFO5Rk",
//   authDomain: "hearthwebsite-7047d.firebaseapp.com",
//   databaseURL: "https://hearthwebsite-7047d-default-rtdb.firebaseio.com",
//   projectId: "hearthwebsite-7047d",
//   storageBucket: "hearthwebsite-7047d.appspot.com",
//   messagingSenderId: "715450515037",
//   appId: "1:715450515037:web:c5ddf2b6362c858f2f57b4",
//   measurementId: "G-MZE54YVG8G"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);