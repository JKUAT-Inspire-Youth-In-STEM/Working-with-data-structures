/**
 * Objects - Object literals
 * Arrays
 * Loops -
 * Have an array of objects
 * Intro to the DOM
 *
 *
 *
 * 1. Objects have:
 * - Constructor --
 * - Properties
 * - Methods
 *
 * 2. Arrays:
 * - related elements put together
 *
 * 3. for loop:
 * -
 *
 */

// object literals
let pet = {
	name: "Whisker",
	legs: 4,
	height: 80,
	color: "brown",
};

console.log(pet); // the dot operator allows to access whats inside an object


// Arrays:
// Arrays are multiple related elements stored together
// To access a value in an array, YOU MUST KNOW ITS INDEX

let arr = [23, 55, 41, 88, 901];

let my_age = 50;

my_age++; // shorthand for adding one, and updating the value
my_age = my_age + 1; // brain dead way of doing things
my_age += 6; // this gives you the freedom to add 5

// We have 3 statements
// first statement runs the first time (only!)
// second statement is a condition that is rechecked in every iteration
// third statement only runs if the condition is true
//
// the code block is ran

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == 88) {
// 		console.log("Found it at index: ", i);
// 		break;
// 	}
// }


console.log(pet.name);

let pets = [
	{
        name: "Donald",
        legs: 2,
        height: 30,
        color: "white"
    },
	{
        name: "Simba",
        legs: 3,
        height: 90,
        color: "brown"
    },
	{
		name: "Whisker",
		legs: 4,
		height: 80,
		color: "brown",
	},
];

console.log(pets);
console.log(pets[0])
console.log(pets[0].color)
console.log("number of pet objects in pets array",pets.length)


for (let i = 0; i < pets.length; i++) {
    petname = "Whisker"
    console.log("Value of i now is: ", i)
	if (pets[i].name === petname){
        console.log(`${petname} is ${pets[i].color} in color`)
    }
}



// Accessing DOM

let submit_button = document.getElementById("pet-owner");


submit_button.addEventListener("click", function () {
	console.log("Someone clicked me!");
});


