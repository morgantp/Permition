const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

exports.addHack = functions.https.onCall((data, context) => {
    const name = data.name;
    const gender = data.gender;
    const age = data.age;
    const email = data.email;
    const address = data.address;
    const number = data.number;

    if(name == "") {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'All fields must be filled in.'
        );
    }

    if(gender == "no") {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'All fields must be filled in.'
        );
    }

    if(age == "") {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'All fields must be filled in.'
        );
    }

    if(email == "") {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'All fields must be filled in.'
        );
    }

    if(address == "") {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'All fields must be filled in.'
        );
    }

    if(number == "") {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'All fields must be filled in.'
        );
    }
 
    return admin.firestore().collection(gender).add({
        name,
        gender,
        age,
        email,
        address,
        number
    })
    .then(() => {
        return {result: "success"}
    })
    .catch(error => {
        alert(error.message);

    })
});