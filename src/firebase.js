import { initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAXYTEUQALvG77giUHEAs53wwL3UGl44NU",
  authDomain: "uplyft-app-8d411.firebaseapp.com",
  projectId: "uplyft-app-8d411",
  storageBucket: "uplyft-app-8d411.firebasestorage.app",
  messagingSenderId: "1067831436907",
  appId: "1:1067831436907:web:574bc9a563cc35c26ab32e"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);