import {initializeApp }from 'firebase/app';
import {getAuth} from "firebase/auth";

import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCbKZJl8XiyV79lmDcRXag_A3YXu6RWYhw",
  authDomain: "utube-clone-2705.firebaseapp.com",
  projectId: "utube-clone-2705",
  storageBucket: "utube-clone-2705.appspot.com",
  messagingSenderId: "490972614705",
  appId: "1:490972614705:web:fec7e515ee5a747f038510",
};

const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app