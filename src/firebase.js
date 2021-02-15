import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCgNC76OErIcFFZ3dheEGGLUFNwgWGzKIA",
    authDomain: "crud-7305e.firebaseapp.com",
    projectId: "crud-7305e",
    storageBucket: "crud-7305e.appspot.com",
    messagingSenderId: "58786102891",
    appId: "1:58786102891:web:1c5a6e98288c82edc73b2e"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)