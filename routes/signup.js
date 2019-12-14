const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
const firebase = require("../models/connect")
router.get('/signup', (req, res, next) => {
    res.render('signup')
})
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
    res.redirect('/signup');
});
module.exports = router;