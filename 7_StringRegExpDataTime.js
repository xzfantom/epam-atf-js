"use strict";
// Task 1
// Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular
// expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
(function task1(){
    console.log("Task 1");

    let str = 'ahb acb aeb aeeb adcb axeb';
    let result = str.match(/a.b/g);

    console.log(result);
})();

// Task 2
// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
(function task2(){
    console.log("\nTask 2");

    let str = '2 + 3 223 2223';
    let result = str.match(/2 \+ 3/);

    console.log(result);
})();

// Task 3
// Get the day, month and year of the current date and output it to the console separately
(function task3(){
    console.log("\nTask 3");

    let now = new Date();

    console.log(now.getDate());
    console.log(now.getMonth()+1);
    console.log(now.getFullYear());
})()