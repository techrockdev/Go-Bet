import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyB7yqLBPF8k80bTiZzqkzE-lPED3SSdVoY",
    authDomain: "go-bet-auth-email-pass.firebaseapp.com",
    projectId: "go-bet-auth-email-pass",
    storageBucket: "go-bet-auth-email-pass.appspot.com",
    messagingSenderId: "343436760207",
    appId: "1:343436760207:web:4b4888714fe00308f1ccfa"
};

export const app = initializeApp(firebaseConfig);