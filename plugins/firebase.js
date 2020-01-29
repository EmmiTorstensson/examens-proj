import * as firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyAivuIzkgKMaUnSN8noda5avLxyoZoX2Dw",
        authDomain: "tinder-197af.firebaseapp.com",
        databaseURL: "https://tinder-197af.firebaseio.com",
        projectId: "tinder-197af",
        storageBucket: "tinder-197af.appspot.com",
        messagingSenderId: "150440070405",
        appId: "1:150440070405:web:8524efde29379beb34bb6c",
        measurementId: "G-NTGGPWFWZN"
    }
    firebase.initializeApp(firebaseConfig)
    firebase.firestore().settings({timestampsInSnapshots: true})
};

 const fireDb = firebase.firestore()

 export { fireDb }