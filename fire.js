import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD2E3bdp7xiGeUBIy_yWPCLGOxqHcIQ01M",
  authDomain: "login-2ca4e.firebaseapp.com",
  projectId: "login-2ca4e",
  storageBucket: "login-2ca4e.appspot.com",
  messagingSenderId: "205815008423",
  appId: "1:205815008423:web:6132795476bf0d28fadf82"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;