import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDzlDG8GtIzulR90nUxvixv9qU_TzWvwx8",
    authDomain: "thedojosite-6f24c.firebaseapp.com",
    projectId: "thedojosite-6f24c",
    storageBucket: "thedojosite-6f24c.appspot.com",
    messagingSenderId: "166781935552",
    appId: "1:166781935552:web:e8c48dfd69679e7501b225"
};

// init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, projectStorage, timestamp}