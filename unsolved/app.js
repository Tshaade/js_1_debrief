console.log('Your JS file is linked!');

//1. FizzBuzz
// Create variable myNumber
// Check that the value of the myNumber is of type number
// If myNumber is not a number, print 'This is not a number' to the console.
// If value of myNumber is a multiple of 3 print 'Fizz' to the console
// If value of myNumber is a multiple of 5 print 'Buzz' to the console
// If the value of myNumber is a multiple of both 3 and 5 (ex. 15) print FizzBuzz to the console
// If the value of myNumber is any other number print the value of myNumber to the console.
// Reference Codecademy lessons: Introduction- Arithmetic Opertaors, Conditional Statements lessons 3, 4, 5,and 9

//Write your code for FizzBuzz below this line:

let myNumber = 9;

if (typeof myNumber === 'number') {
    console.log('This is a number');
} else if (typeof myNumber !== 'number') {
    console.log('This is not a number');
} else if (myNumber / 3) {
    console.log('Fizz');
} else if (myNumber / 5) {
    console.log('Buzz');
} else if (myNumber / 15) {
    console.log('FizzBuzz');
} else {
    console.log(`The value of the number is ${myNumber}`);
}




//2. E-Commerce Item list

// Use a swtich statement to print the price of the each item in the store to the console.
// Ex. If the value of the variable is 'shoes' then, the statement "Shoes are $50" should be printed to the console.
// Reference: Codecademy lesson 10
// Items:
// Shoes- $50
// Jeans- $25
// Hat- $12
// Socks- $2
// If the variable input is not an item in the store, then print 'Invalid Item' to the console.

//Write your code for the E-Commerce item list below this line:

let item = '';

switch (item) {
    case 'Shoes':
        console.log('Shoes are $50');
        break;
    case 'Jeans':
        console.log('Jeans are $25');
        break;
    case 'Hat':
        console.log('Hats are $12');
        break;
    case 'Socks':
        console.log('Socks are $50');
        break;
        default:
            console.log('Invalid Item');
}


//3. Print a random integer (whole number) between 50(inclusive) and 100(exclusive) to the console
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Write your code below this line:

function getRandomInt(min = 50, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  