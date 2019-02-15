/*eslint-env browser*/

//Larger or Smaller? (5 points)
//Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

//prompt user to enter bill amount.


var bill1 = parseFloat(window.prompt("Enter your first bill.", Enter first bill here));
var bill2 = parseFloat(window.prompt("Enter your second bill.", Enter second bill here));

var largerBill = 0;
var equalBill = 0;


if (bill1 > bill2) {
    largerBill = bill1;
    //DISPLAY MESSAGE
    window.document.write(bill1);
} else if (bill1 < bill2) {
    largerBill = bill2;
    //DISPLAY MESSAGE
    window.document.write(bill2); 
} else if (bill1 == bill2) 
    equalBill = bill1;
    window.document.write("Both bills are equal: " + equalBill);
}

