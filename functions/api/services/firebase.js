const admin = require("firebase-admin");
const functions = require("firebase-functions");
const firebase = admin.initializeApp(functions.config().default);

exports.appliance_database = firebase.database().ref("Appliances");
