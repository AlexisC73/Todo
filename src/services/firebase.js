import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA0tRbf-S46d5RAb5L8LQ3kGN-B6AqNM3s',
  authDomain: 'todo-app-78ad7.firebaseapp.com',
  databaseURL:
    'https://todo-app-78ad7-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'todo-app-78ad7',
  storageBucket: 'todo-app-78ad7.appspot.com',
  messagingSenderId: '407770774286',
  appId: '1:407770774286:web:0b918e7918f8b7220fb55f',
}

const app = initializeApp(firebaseConfig)

export const authentication = getAuth(app)
export const db = getFirestore()
