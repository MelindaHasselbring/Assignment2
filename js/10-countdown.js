/*eslint-env browser*/

/*Countdown (5 points)
Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on.  
*/


var counter;
var again = "y";


do {
	counter = window.prompt("Enter a number from 1-100");
	if (counter > 0){
		counter--;
	}
	    again = window.prompt("Repeat entries? (y/n)", "y");
} while (again === "y");
		
	
