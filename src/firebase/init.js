import firebase from 'firebase'
import firestore from 'firebase/firestore'
 
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOUnH58RKBUqqEn88ecU2a3KxIBPJGvZs",
    authDomain: "chat-app-f7a58.firebaseapp.com",
    databaseURL: "https://chat-app-f7a58.firebaseio.com",
    projectId: "chat-app-f7a58",
    storageBucket: "chat-app-f7a58.appspot.com",
    messagingSenderId: "531771002136"
  };
 const firebaseApp = firebase.initializeApp(config);
 firebaseApp.firestore().settings({ timestampsInSnapshots: true })
 
export default firebaseApp.firestore()
