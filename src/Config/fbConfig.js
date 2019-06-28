import firebase from 'firebase/app';
import 'firebase/auth';

// initialize firebase
 const firebaseConfig = {
    apiKey: "AIzaSyCTQhdwxFV3S7SMOpzlN0DDuPtWOfzkvM4",
    authDomain: "myredux-9bbc7.firebaseapp.com",
    databaseURL: "https://myredux-9bbc7.firebaseio.com",
    projectId: "myredux-9bbc7",
    storageBucket: "",
    messagingSenderId: "664714108779",
    appId: "1:664714108779:web:ff43c491f51b3827"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firebase().settings({ timestampsInSnapshots:true });

  export default firebase;
