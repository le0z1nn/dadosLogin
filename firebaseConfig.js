import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/* const firebaseConfig = {
    apiKey: "AIzaSyB0vSXvWKR_3VjucdRq8wt-qRMbww23-yE",
    authDomain: "projetaodomarcao.firebaseapp.com",
    projectId: "projetaodomarcao",
    storageBucket: "projetaodomarcao.appspot.com",
    messagingSenderId: "141056532823",
    appId: "1:141056532823:web:780d69a75ed251b243de12",
    measurementId: "G-RFTHXSL5FS"
}; */

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
