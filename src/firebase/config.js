import "firebase/firestore";

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBeciLVSsIudUVFEP8ELUE05hRVECrHFsw",
  authDomain: "deeppockets-4e475.firebaseapp.com",
  projectId: "deeppockets-4e475",
  storageBucket: "deeppockets-4e475.appspot.com",
  messagingSenderId: "1012287946516",
  appId: "1:1012287946516:web:8e48809c107bb9e6b00c01",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
