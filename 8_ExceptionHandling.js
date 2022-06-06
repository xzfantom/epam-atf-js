"use strict";
// Task 1
// In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. 
(function task1() {
    console.log("Task 1");

    try {
        console.log (a);
        let a = 3;
    } catch (err) {
        console.error("let must be declared");
    }
})();

// Task 2
// When running 1/0, the error 'cannot be divided by zero'
(function task2() {
    console.log("\nTask 2");

    try {
        let x = 1/0;

        if (x === Infinity) {
            throw new Error("cannot be divided by zero");
        } 
    } catch (err) {
        console.error(err.message);       
    }
})()