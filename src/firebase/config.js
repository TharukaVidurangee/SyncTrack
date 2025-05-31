import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//config object
const firebaseConfig = {
  apiKey: "AIzaSyC0ls2FtJZxFKqsmQ9Pjkwv6ntK2WE8e1E",
  authDomain: "synctrack-d50dd.firebaseapp.com",
  projectId: "synctrack-d50dd",
  storageBucket: "synctrack-d50dd.firebasestorage.app",
  messagingSenderId: "55123809415",
  appId: "1:55123809415:web:7cfb1961af53273db11422"
};

//initizing firebase 
firebase.initializeApp(firebaseConfig)

//initizing services
//firestore
const projectFirestore = firebase.firestore()
//authentication
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, timestamp }