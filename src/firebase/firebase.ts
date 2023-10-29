import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD46z86cLhvMHg3hStDeuGljIoWnKq-tiM",
  authDomain: "exchangeapp-46cc9.firebaseapp.com",
  projectId: "exchangeapp-46cc9",
  storageBucket: "exchangeapp-46cc9.appspot.com",
  messagingSenderId: "888351761809",
  appId: "1:888351761809:web:47acb6cc394d5d9cd0e630",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
