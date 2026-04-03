// firebase-config.js
// ⚠️ REPLACE THESE VALUES WITH YOUR OWN FROM FIREBASE CONSOLE ⚠️

const firebaseConfig = {
  // Go to https://console.firebase.google.com
  // Select your project → Project Settings → General → Your apps
  
  apiKey: "YOUR_API_KEY_HERE",           // Your unique API key
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();
