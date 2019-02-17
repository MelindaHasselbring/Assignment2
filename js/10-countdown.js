/*eslint-env browser*/

/*Countdown (5 points)
Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on.  
*/


//FOR LOOP

var counter;
var playAgain= "y";
//
counter = window.prompt("Enter a number from 1-100");
for (i = counter; i >= 0; i--) {
	console.log(i);
} 
