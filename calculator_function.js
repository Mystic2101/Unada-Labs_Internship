function calc (num1, num2, option) {
    var ans = 0;
    if (option == 1) {
        ans = num1 + num2;
    }
    if (option == 2) {
        ans = num1 - num2;
    }
    if (option == 3) {
        ans = num1 * num2;
    }
    if (option == 4) {
        ans = num1 / num2;
    }   
    return ans;
    
}

var num1 = prompt("Write number 1: ");
var num2 = prompt("Write number 2: ");
var option = prompt("Press 1 for adding, Press 2 for Subtracting, Press 3 for multiplaction and Press 4 for division: ");
console.log("The answer is " + calc(num1, num2, option));