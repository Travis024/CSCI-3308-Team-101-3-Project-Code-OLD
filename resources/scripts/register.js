var nameValid = false;
var emailValid = false;
var usernameValid = false;
var passwordValid = false;
var passwordMatch = false;

function checkNames(){
  if(document.getElementById('firstName').value.length == 0 || document.getElementById('lastName').value.length == 0){
    document.getElementById('nameHelpBlock').innerHTML = "Please enter a first AND last name.";
    nameValid = false;
  }
  else{
    document.getElementById('nameHelpBlock').innerHTML = "";
    nameValid = true;
  }
}

function checkEmail(){
  var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var userEmail = document.getElementById('email');

  if(userEmail.value.match(regexEmail)){
    document.getElementById('emailHelpBlock').innerHTML = "Valid email!";
    emailValid = true;
  }
  else{
    document.getElementById('emailHelpBlock').innerHTML = "Invalid email - please re-enter your email address.";
    emailValid = false;
  }
}

function checkUsername(){
  if(document.getElementById('usernameRegister').value.length == 0){
    document.getElementById('usernameHelpBlock').innerHTML = "Please enter a username!";
    usernameValid = false;
  }
  else{
    document.getElementById('usernameHelpBlock').innerHTML = "";
    usernameValid = true;
  }
}

function checkPassword(){
  var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  var userPassword = document.getElementById('passwordRegister');

  if(userPassword.value.match(regexPassword)){
    document.getElementById('passwordHelpBlock').innerHTML = "Your password meets all criteria!";
    passwordValid = true;
  }
  else{
    document.getElementById('passwordHelpBlock').innerHTML = "Your password doesn't meet all criteria - you need 8 characters, one uppercase, one lowercase, and one number.";
    passwordValid = false;
  }
}

function confirmPassword(){
  var confirmed = (document.getElementById('passwordRegister').value == document.getElementById('passwordConfirm').value);

  if(confirmed){
    document.getElementById('confirmHelpBlock').innerHTML = "Passwords match!";
    passwordMatch = true;
  }
  else{
    document.getElementById('confirmHelpBlock').innerHTML = "Passwords don't match - please re-type."
    passwordMatch = false;
  }
}

function enableButton(){
  if(nameValid && emailValid && usernameValid && passwordValid && passwordMatch){
    document.getElementById('submitButton').disabled = false;
  }
  else{
    document.getElementById('submitButton').disabled = true;
  }
}
