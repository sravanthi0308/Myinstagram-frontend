import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDsrDc5_gENSb6O4rDjwi64omSIUL7qTrE",
  authDomain: "instaclone-d0865.firebaseapp.com",
  projectId: "instaclone-d0865",
  storageBucket: "instaclone-d0865.appspot.com",
  messagingSenderId: "387826613483",
  appId: "1:387826613483:web:3a145c9b9d11cc4ecdd2ae"
});

const auth=firebase.auth();
const storage=firebase.storage();

export {storage,auth};


