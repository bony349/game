const firebase = require('firebase');
firebase.initializeApp({
    apiKey: "AIzaSyA9aeDxWmLB_TpZOujjotydL4DlTXE036g",
    authDomain: "gamemaster-14998.firebaseapp.com",
    databaseURL: "https://gamemaster-14998.firebaseio.com",
    projectId: "gamemaster-14998",
    storageBucket: "gamemaster-14998.appspot.com",
    messagingSenderId: "463618622923",
    appId: "1:463618622923:web:df516998ec0c6bcc59a24e",
    measurementId: "G-NPT2YHLYPH"

})
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gamemaster-14998.firebaseio.com"
});

var database = admin.database();
var ref = database.ref('product');
var usersRef = ref.child("product");
usersRef.set({
    alanisawesome: {
        name: "June 23, 1912",
        price: 564
    },
    gracehop: {
        name: "December 9, 1906",
        price: 534
    }
});

module.exports = firebase;