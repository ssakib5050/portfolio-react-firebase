import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQ5XWgphZTuz6c5DkEhB1LFYSsbXuwDlM",
  authDomain: "react-portfolio-92c60.firebaseapp.com",
  databaseURL: "https://react-portfolio-92c60.firebaseio.com",
  projectId: "react-portfolio-92c60",
  storageBucket: "react-portfolio-92c60.appspot.com",
  messagingSenderId: "95840821241",
  appId: "1:95840821241:web:c3193bfbb06f094fcc6728",
  measurementId: "G-L9QKSMC52C",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
