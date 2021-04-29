import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA47HBME0M-R7m76TU5ajZgkr75o6S0uc8",
  authDomain: "formulario-exemplo.firebaseapp.com",
  projectId: "formulario-exemplo",
  storageBucket: "formulario-exemplo.appspot.com",
  messagingSenderId: "149309265912",
  appId: "1:149309265912:web:00432c092423175598280d",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();

export { auth };
