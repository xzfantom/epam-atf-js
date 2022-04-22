    "use strict";
    // Task 1
    // Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
    console.log("Task 1");

    var movies = [ "The Shawshank Redemption (1994)",
               "The Godfather (1972)",
               "The Dark Knight (2008)",
               "The Godfather: Part II (1974)",
               "12 Angry Men (1957)",
               "Schindler's List (1993)",
               "The Lord of the Rings: The Return of the King (2003)",
               "Pulp Fiction (1994)",
               "The Lord of the Rings: The Fellowship of the Ring (2001)",
               "The Good, the Bad and the Ugly (1966)",
            ];
    movies.forEach(element => {
        console.log(element);
    });

    // Task 2
    // Given an array of car manufacturers, convert the array to a string and back to an array
    console.log("\nTask 2");

    var manufacturers = [ "Volvo",
                      "Fiat",
                      "Ferrari",
                      "Volkswagen",
                      "Opel",
                      "Audi",
                      "Toyota",
                      "Mercedes",
                      "BMW",
                      "Renault"
                    ];

    var names = manufacturers.join(", ");
    console.log(names);

    var manFromString = names.split(", ");
    console.log(manFromString);

    // Task 3
    // Given an array of the names of your friends, add the words hello to each element of the array
    console.log("\nTask 3");

    var friends = [ "Nikita",
                "Ekaterina",
                "Vladimir",
                "Petr",
                "Dmitriy",
                "Nikolay"
              ];

    var helloFriends = friends.map(item => "Hello "+item);

    console.log(helloFriends);

    // Task 4
    // Convert numeric array to Boolean
    console.log("\nTask 4");

    var numericArray = [ 5, 6, 3, 8, 0,1, 0, 4, 3];
    var booleanArray = numericArray.map(item => Boolean(item));

    console.log(booleanArray);

    // Task 5
    // Sort the array [1,6,7,8,3,4,5,6] in descending order
    console.log("\nTask 5");

    var sortArray = [1,6,7,8,3,4,5,6];
    var sortedArray = sortArray.sort((a, b) => b-a);

    console.log(sortedArray);

    // Task 6
    // Filter array [1,6,7,8,3,4,5,6] by value> 3
    console.log("\nTask 6");

    var filterArray = [1,6,7,8,3,4,5,6];
    var filteredArray = filterArray.filter(value => value > 3);

    console.log(filteredArray);

    // Task 7
    // Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
    console.log("\nTask 7");

    function getIndexOfValue(arr, value){
        return arr.indexOf(value);
    };

    console.log(getIndexOfValue([1, 3, 5 ,8, 4, 7, 0], 5));

    // Task 8
    // Implement a loop that will print the number 'a' until it is less than 10
    console.log("\nTask 8");

    for (let a=0; a < 10; a++) {
        console.log(a);
    }

    // Task 9
    // Implement a loop that prints prime numbers to the console
    console.log("\nTask 9");

    function isPrime(num){
        var max = Math.sqrt(num);
        for (let i = 2; i <= max; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    };

    for (let i = 2; i < 100; i++){
        if (isPrime(i)){
            console.log(i);
        }
    }

    // Task 10
    // Implement a loop that prints odd numbers to the console
    console.log("\nTask 10");
    
    for (let i=1; i < 100; i++) {
        if (i % 2) {
            console.log(i);
        }
    }