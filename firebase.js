// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBed9kYqBUtQoipEh8gVfivb5y7V8ARTq0',
  authDomain: 'blogsite-5506d.firebaseapp.com',
  projectId: 'blogsite-5506d',
  storageBucket: 'blogsite-5506d.appspot.com',
  messagingSenderId: '426954809830',
  appId: '1:426954809830:web:45a95b5e26dc523261b627'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }
