const functions = require("firebase-functions");
const app = require("express")();
const jsonParser = require("body-parser").json();

const router = require("./api/routes/router");

app.use(jsonParser);
router(app);

exports.api = functions.https.onRequest(app);
