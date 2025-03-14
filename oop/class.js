
class Person {
	constructor(name_param, hobby_param) {
		this.name = name_param;
		this.hobby = hobby_param;
	}

	interact(your_name) {
		console.log("Hello", your_name, "I am ", this.name);
	}
}

let Chris = new Person("Chris Mwilo", "Swimming");
let Prisca = new Person("Prisca Mwilo", "Eating");


Chris.interact("Mark Victor")
Prisca.interact("Mark Victor")



// This is another example


class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello, my name is ${this.name}`)
    }

    walk(steps){
        console.log("I have walked ", steps, "steps already")
    }
}

const Ada = new Human("Ada Lovelace", 90)
Ada.greet()
Ada.walk(1200)


