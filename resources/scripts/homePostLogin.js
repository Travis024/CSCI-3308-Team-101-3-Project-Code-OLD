//This is the number of actiities that we have
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

//An array of objects
//Each object contains a name, yesCount, description, and imgSrc for loading into html
var activityArray = [
  {name: 'Pedego Bike Tour', yesCount: 4, description: 'Take a 3-hour electric bike tour and explore historic downtown Boulder, Boulder Canyon, Chatauqua, and more!', imgSrc: '../resources/img/pedegoBike.jpg'},
  {name: 'Front Range Anglers Fishing', yesCount: 4, description: 'Take a guided fly fishing expedition for Trout in Boulder and along the Front Range!', imgSrc: '../resources/img/frontRangeAngler.jpg'},
  {name: 'Hot Air Balloon Flight', yesCount: 3, description: 'Enjoy gorgeous views of mountain scenery, Colorados plains, and wildlife as far as the eye can see as you soar through the sky in a hot air balloon!', imgSrc: '../resources/img/hotAirBalloons.jpg'},
  {name: 'Boulder Creek Path', yesCount: 5, description: 'Go for a stroll or hop on your bike as you travel along the Boulder Creek Path! This path follows the gorgeous Boulder Creek and allows for multiple pitstops at some of Boulders finest locations.', imgSrc: '../resources/img/boulderCreekPath.jpg'},
  {name: 'Mount Sanitas Trail', yesCount: 6, description: 'This is a 90 minute hike with views that allow you to see almost all the way to Kansas! It is rated as a moderate difficulty, so make sure to bring water!', imgSrc: '../resources/img/mountSanitas.jpg'},
  {name: 'Royal Arch Trail', yesCount: 5, description: 'A challenging hike with an absolutley stunning reward at the top. Do not be confused by the false summit - there is still an extra half mile from that point!', imgSrc: '../resources/img/royalArch.jpg'},
  {name: 'Valmont Bike Park', yesCount: 6, description: 'No matter your experience in mountain biking, the Valmont Bike Park has what you are looking for! Enjoy a day in the sun and some gnarly rides!', imgSrc: '../resources/img/valmontBike.jpg'},
  {name: 'Flatiron Golf Course', yesCount: 4, description: 'Enjoy Boulders premier golf course with a wonderful view of the Flatirons! Course regulars love the moderate challenge of the course and the friendly staff.', imgSrc: '../resources/img/flatironsGolf.jpg'},
  {name: 'Boulder Ale Trail', yesCount: 4, description: '15 miles, 12 breweries, and 0 cars! The Boulder Ale trail is the perfect way to enjoy your two favorite things in one of the nations biggest brewing cities!', imgSrc: '../resources/img/boulderAle.jpg'},
  {name: 'Flatiron Hike', yesCount: 5, description: 'Hike up Boulders most prominent features - the Flatirons! This is a 2.6 mile round trip hike that offers a gorgeous panoramic view at the top.', imgSrc: '../resources/img/flatironHike.jpg'},
  {name: 'Horseback Riding', yesCount: 2, description: 'Interested in going horseback riding? Then the Sombrero Ranch has you covered! Half-hour and hour long rides are both offered, and the horses could not be more friendly!', imgSrc: '../resources/img/horsebackRiding.jpg'},
  {name: 'Eldora Ski Resort', yesCount: 4, description: 'It is time to hit the powder, and do not expect to come back without a smile on your face! The Eldora Ski Resort is known throughout Colorado as one of the best places for skiing, and it is a short ride from Boulder.', imgSrc: '../resources/img/skiing.jpg'},
  {name: 'Bear Peak Trail', yesCount: 5, description: 'A must-do hike for anyone in Colorado! The trail is challenging, but the views seen throughout the hike are truly stunning. Plus, a good workout means you can kick back an extra beer after!', imgSrc: '../resources/img/bearPeak.jpg'},
  {name: 'Boulder Creek Tubing', yesCount: 4, description: 'Kick back, relax, and enjoy a wonderful time tubing down the Boulder Creek! While some take to the creek in the Winter as a show of grit, we recommend this as a Summer activity.', imgSrc: '../resources/img/tubing.jpg'},
  {name: 'Boulder Resevioir Paddleboarding', yesCount: 3, description: 'The cool breeze in your hair, the warm sun on your shoulders — there is no better way to enjoy a summer day than cruising along the glittering waters of Boulder Reservoir on a stand-up paddleboard.', imgSrc: '../resources/img/paddleboarding.jpg'},
  {name: 'Flower Picking', yesCount: 1, description: 'Longs Gardens in Boulder allows visitors to pick and dig up their very own flowers! We are betting this is an experience that you have never had before!', imgSrc: '../resources/img/flowerPicking.jpg'}
];

//This functions randomizes the 'numbers' array to give the user a feeling that they're being suggestes new activities each time
//It is O(n) in runtime, which is fine given how few activities we have
function shuffleArray(numberArray){
  var currentIndex = numberArray.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = numberArray[currentIndex];
    numberArray[currentIndex] = numberArray[randomIndex];
    numberArray[randomIndex] = temporaryValue;
  }

return numberArray;

}

//Based on how many 'Yes' responses there were, we now load in activities for the user.
function loadActivities(){

  //Retrieve the number of 'Yes' responses from the 'Quiz' page
  var numYes = parseInt(sessionStorage.getItem("countYes"));

  //Shuffle the array so that we get a unique ordering
  shuffleArray(numbers);

  //Sets the current number of activity matches to make sure we don't try to fill more cards than we have
  //Also sets a lower and uper bound for what we'll constitute as a match
  var countActivities = 1;
  var lowerBound = numYes - 1;
  var upperBound = numYes + 1;

  //Loop through every number in the 'numbers' array until we have 5 matches or until we run out of numbers
  for(var i = 0; i < 16 && countActivities < 6; i++){
      //Check to see if the current activity is within our bounds
      if(activityArray[numbers[i]].yesCount >= lowerBound && activityArray[numbers[i]].yesCount <= upperBound){

        //A switch statement determines which card we'll load information into
        switch(countActivities){
          case 1:
            document.getElementById('activity1img').src = activityArray[numbers[i]].imgSrc;
            document.getElementById('activity1name').innerHTML = activityArray[numbers[i]].name;
            document.getElementById('activity1description').innerHTML = activityArray[numbers[i]].description;
            countActivities = countActivities + 1;
            break;

          case 2:
            document.getElementById('activity2img').src = activityArray[numbers[i]].imgSrc;
            document.getElementById('activity2name').innerHTML = activityArray[numbers[i]].name;
            document.getElementById('activity2description').innerHTML = activityArray[numbers[i]].description;
            countActivities = countActivities + 1;
            break;

          case 3:
            document.getElementById('activity3img').src = activityArray[numbers[i]].imgSrc;
            document.getElementById('activity3name').innerHTML = activityArray[numbers[i]].name;
            document.getElementById('activity3description').innerHTML = activityArray[numbers[i]].description;
            countActivities = countActivities + 1;
            break;

          case 4:
            document.getElementById('activity4img').src = activityArray[numbers[i]].imgSrc;
            document.getElementById('activity4name').innerHTML = activityArray[numbers[i]].name;
            document.getElementById('activity4description').innerHTML = activityArray[numbers[i]].description;
            countActivities = countActivities + 1;
            break;

          case 5:
            document.getElementById('activity5img').src = activityArray[numbers[i]].imgSrc;
            document.getElementById('activity5name').innerHTML = activityArray[numbers[i]].name;
            document.getElementById('activity5description').innerHTML = activityArray[numbers[i]].description;
            countActivities = countActivities + 1;
            break;
        }

      }

  }
}
