import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyClgQNvQubx3K-u0yy53SZgzVcXgRLYy3s",
    authDomain: "simply-chat-8a6b3.firebaseapp.com",
    projectId: "simply-chat-8a6b3",
    storageBucket: "simply-chat-8a6b3.appspot.com",
    messagingSenderId: "287572850616",
    appId: "1:287572850616:web:f972167fe41e4bf6a8014d"
  }).auth();