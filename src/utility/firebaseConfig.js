// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, gitFireStore } from 'firebase/fireStore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBn6RDFdK3D2MCCH8chm-efTPpGZyGcatk',
  authDomain: 'graniteshop-29e1a.firebaseapp.com',
  projectId: 'graniteshop-29e1a',
  storageBucket: 'graniteshop-29e1a.firebasestorage.app',
  messagingSenderId: '526019386554',
  appId: '1:526019386554:web:9acbcfffc226f885d5f683',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app as firebaseApp, db }
