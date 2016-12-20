/**
 * Created by tsamb on 12/19/2016.
 */
var database = firebase.database();
var recipe_list = database.ref('recipe');

var register = document.getElementById('register');
register.addEventListener('click', register_acct.bind(this));

function register_acct() {

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage);
        // ...
    });
    console.log("success")
}1


