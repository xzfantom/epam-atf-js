// Create 2 objects: animal and cat, add move property to animal object,
// cat object must inherit move property from object animal
"use strict"

let animal = {
    move : 0
};

let cat = {
    __proto__ : animal
};

console.log(cat.move);
