const admin = require("firebase-admin");
const serviceAccount = require("../../mytpi-dde27-firebase-adminsdk-w8bow-48ec8ac356.json");

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mytpi-dde27.firebaseio.com/"
  // storageBucket: ''
});

exports.appliance_database = firebase.database().ref("Appliances");
// exports.storage = firebase.storage()
