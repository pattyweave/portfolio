const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const cors = require('cors')({ origin: true });
const http = require('requestify');

exports.wordnikProxy = functions.https.onRequest((req, res) => {

    cors( req, res, () => {

        const apiKey = functions.config().wordnik.key;

        const url = `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${apiKey}`;

        return http.get(url).then( response => {
            return res.status(200).send(response.getBody());
        })
        .catch( er => {
            return res.status(400).send(err);
        })

    });

});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

