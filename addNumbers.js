// numbers entered by user
var firstNumber;
var secondNumber;
var number1, number2;
var sum; 

while(typeof(number1) !== "number") {
    firstNumber = window.prompt("Enter first number: ")
    console.log("This should appear in console")
    // if firstnumber is not a number
    if(isNaN(parseInt(firstNumber))) {
        //alert msg
        window.alert("That is not a number.")
    }else {
        // convert to number
        number1 = parseInt(firstNumber)
    }
}

secondNumber = window.prompt("Enter second number: ")

number1 = parseInt(firstNumber); //it turns entered num into int
number2= parseInt(secondNumber);

sum = number1 + number2;

//display results
document.writeln("<h1>The sum is " + sum + "</h1>")


// write a program to check if a number is an Armstrong number 
//Armstrng number;
//153 = 1^3 + 5^3 + 3^3 =153, then it is armstrong number 

