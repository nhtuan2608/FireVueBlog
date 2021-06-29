import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDrqkQ-ynd_Z2Sz06Bepo5CyEIKWFu1qj4",
  authDomain: "firevueblog.firebaseapp.com",
  projectId: "firevueblog",
  storageBucket: "firevueblog.appspot.com",
  messagingSenderId: "890127710623",
  appId: "1:890127710623:web:f7103a75f0a4094a4265aa",
  measurementId: "G-D7GX6LS0LK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {timeStamp};
export default firebaseApp.firestore();