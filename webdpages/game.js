var secretNum = 4;
var guess = prompt("guess a number");
if(guess==secretNum)
{
	alert("You got it right!");
}
else if(guess>secretNum){
	alert("Too high,guess again!")
}
else {
	alert("Too low,guess again!");
}