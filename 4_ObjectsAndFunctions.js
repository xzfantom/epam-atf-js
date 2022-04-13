// Task 1
// Create a car object, add a color property to it with the value equals 'black'
console.log("Task 1");

let car = {};
car["color"] = "back";

console.log(car);
// Task 2
// Change the color property of the car object to 'green'
console.log("\nTask 2");

car.color = "green";

console.log(car);
// Task 3
// Add the power property to the car object, which is a function and displays the engine power to the console
console.log("\nTask 3");

function enginePower() {
    console.log("Power: 100 HP");
};

car["power"] = enginePower();

// Task 4
// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
console.log("\nTask 4");

let totalPears = 1;
let totalApples = 2;

function acceptFruits(pears, apples) {
    totalPears += pears;
    totalApples += apples;

    return {pears : totalPears,
            apples : totalApples}
}

console.log(acceptFruits(10, 15));

// Task 5
// Your name is saved in the payment terminal, write a function to define the
// name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
console.log("\nTask 5");

function defineName (userName) {
    if (userName == "Artsiom") {
        console.log(`Hello ${userName}`);
    } else {
        console.log("There is no such name");
    }
}

defineName("Volodya");
defineName("Artsiom");

// Task 6
// Write a function for calculating the type of argument and type output to the console
console.log("\nTask 6");

function checkType(variable) {
    console.log(typeof(variable));
}

checkType("String");
checkType(true);
checkType(10);

// Task 7
// Write a function that determines whether a number is prime or not
console.log("\nTask 7");

function isPrime(num){
    var max = Math.sqrt(num);
    for (var i = 2; i <= max; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(21));