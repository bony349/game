const express = require('express');
const alert = require('alert-node');
const bodyParser = require('body-parser');
const router = express.Router();
let founderror = false;
router.use(bodyParser.urlencoded({ extended: false }));
const firebase = require("../models/connect")
router.get('/signup', (req, res, next) => {
    res.render('signup')
});
router.get('/signin', (req, res, next) => {
    res.render('signup')
});

router.post('/signup', (req, res, next) => {
    var email = req.body.signupemail;
    var password = req.body.signuppassword;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {

            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                console.log('The password is too weak.');
            } else {

                console.log(errorMessage);


            }
            console.log(error);


        });
    res.redirect('/signin');
});

router.post('/signin', (req, res, next) => {

    var loginemail = req.body.loginemail;


    var loginpassword = req.body.loginemail;



    firebase.auth().signInWithEmailAndPassword(loginemail, loginpassword)
        .catch(function(error) {
            var errorCodes = error.code;
            var errorMessage = error.message;
            if (errorCodes === 'auth/wrong-password') {
                founderror = true;
                alert('Wrong password.');
                founderror = true;
            } else {
                founderror = true;
                alert(errorMessage);
                founderror = true;
            }

            console.log(error);
        });
    if (founderror !== false) {
        res.redirect('/signin');
    } else {
        res.redirect('/');
    }
});
module.exports = router;