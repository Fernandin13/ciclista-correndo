import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyA-9zju22sQGh1_9_Bxx0oL43VvmqA0GYM",
  authDomain: "ciclista-eletronico-f1629.firebaseapp.com",
  projectId: "ciclista-eletronico-f1629",
  storageBucket: "ciclista-eletronico-f1629.appspot.com",
  messagingSenderId: "256915046408",
  appId: "1:256915046408:web:36143124b6968004f211bd"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
