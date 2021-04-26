const functions = require("firebase-functions");

exports.addHack = functions.https.onCall((data, context) => {
    // if(data.length < 0){
    //     throw new functions.https.HttpsError(
    //         'invalid-argument',
    //         'All fields must be filled in to complete registration'
    //     );
    // }
    admin.firestore().collection('Data').add({
        name: data.text,
        gender: data.text,
        age: data.text,
        email: data.text,
        address: data.text,
        number: data.text
    })
});