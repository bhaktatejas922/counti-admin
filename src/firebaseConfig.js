import * as firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyBKODYVXT7BwE-I8j9DhlrIfXWYUVufAMI",
    authDomain: "countiadmin.firebaseapp.com",
    databaseURL: "https://countiadmin.firebaseio.com",
    projectId: "countiadmin",
    storageBucket: "countiadmin.appspot.com",
    messagingSenderId: "814328273918",
    appId: "1:814328273918:web:8ba90d69d56d7cc19cbeaf",
    measurementId: "G-M081KTGCF6"
  };
  let firebaseConfig = firebase.initializeApp(
      config
  );

  export default
  firebaseConfig;
  