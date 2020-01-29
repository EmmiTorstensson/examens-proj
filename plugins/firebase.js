import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAivuIzkgKMaUnSN8noda5avLxyoZoX2Dw",
    authDomain: "tinder-197af.firebaseapp.com",
    databaseURL: "https://tinder-197af.firebaseio.com",
    projectId: "tinder-197af",
    storageBucket: "tinder-197af.appspot.com",
    messagingSenderId: "150440070405",
    appId: "1:150440070405:web:8524efde29379beb34bb6c",
    measurementId: "G-NTGGPWFWZN"
  };

  /*
  let app = null; 
  if (!firebase.app.length) {
      app = firebase.initializeApp(firebaseConfig)
  }
  */

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore() 
db.settings({ timestampsInSnapshots: true})

export default db