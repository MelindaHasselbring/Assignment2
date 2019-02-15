/*eslint-env browser*/

/*Looping a Triangle (5 points)
Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
#######
*/


var i, j;
  for(i=1; i <= 7; i++)
   {
    for(j=1; j<=i; j++)
   {
     document.write('*');
    }
     document.write('<br/>');
   }