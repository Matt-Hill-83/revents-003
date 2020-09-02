import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/database"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB3GhhuqlkfoOp8525V9zGceq5wLlj0KcU",
  authDomain: "revents-003.firebaseapp.com",
  databaseURL: "https://revents-003.firebaseio.com",
  projectId: "revents-003",
  storageBucket: "revents-003.appspot.com",
  messagingSenderId: "9778671865",
  appId: "1:9778671865:web:c67f10e09df54956227228",
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
