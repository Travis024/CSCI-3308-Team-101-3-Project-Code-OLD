//If the user wants to navigate away, they'll be brought home. Otherwise, the event is cancelled and browser doesn't change.
function homeAlert(){
  var Ans = confirm("Are you sure you want to leave? Doing so will cause you to be logged out and make you unable to see recommended activities.");
    if(Ans==true)
      document.getElementById('homeButton').href = "home.html";
    else
      event.preventDefault();
}

//If the user is ready to submit, they can do so. Otherwise, they can go back and change their answers.
function submitAlert(){
  var Ans = confirm("Have you checked over all of your answers to make sure they properly reflect the activities you're looking for?");
    if(Ans==true)
      document.getElementById('submitButton').href = "homePostLogin.html";
    else
      event.preventDefault();
}

//This function counts how many "Yes" buttons the user selected. We can then pass this to the 'homePostLogin' page.
//By using session storage, the result only lasts as long as the tab is open. Once closed, the storage is cleared.
function countYes(){
  var numYesQuery = document.querySelectorAll('.yesButton.active');
  var numYes = numYesQuery.length;

  sessionStorage.setItem("countYes", numYes);
  alert(sessionStorage.getItem("countYes"));
}
