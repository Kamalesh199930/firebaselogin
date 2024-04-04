
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC1-23oUD-GIlg8ngHLdKemHmb-pG4zL5U",
  authDomain: "emailpasswordlogin-97ee3.firebaseapp.com",
  projectId: "emailpasswordlogin-97ee3",
  storageBucket: "emailpasswordlogin-97ee3.appspot.com",
  messagingSenderId: "211748218484",
  appId: "1:211748218484:web:52673c2add1a8d3ff2d321",
  measurementId: "G-4HTPKQ47YP"
};


const app = initializeApp(firebaseConfig);
 export const database = getAuth(app)