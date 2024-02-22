"use strict";

//* 2 Personal Message:
let person_name1: string = "hoorain";
console.log(`Hello ${person_name1} would you ike to learn some typescript today?`);


//* 3 Name Cases:
console.log("lowercase: ", person_name1.toLowerCase());
console.log("uppercase: ", person_name1.toUpperCase());
console.log("titlecase: ", person_name1.replace('h', 'H'));


//* 4 Famous Quote:
let quote1: string = "Failure is a word unknown to me.";
console.log(`Muhammad Ali Jinnah once said, "${quote1}"`);


//* 5 Famous Quote 2:
let famous_person: string = "Muhammad Ali Jinnah";
let quote2: string = "Work, work and work we are bound to success.";
let message1: string = `${famous_person} once said, "${quote2}"`;
console.log(message1);


//* 6 Stripping Names:

let person_name2: string = "\n\n\thoorain  amjad\t\n";
console.log("normal: ", person_name2);
console.log("striped: ", person_name2.trim());


//* 7 Number Eight: 

console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(16 / 4);


//* 9 Favorite Number:

let my_fav_num: number = 8
let message2: string = `My favorite number is ${my_fav_num}`
console.log(message2);


//* 10 Adding Comments:

// return a number between 1-6
function rollDice(): number {
    return Math.ceil(Math.random() * 6)
}

// takes two values and return all operations with those numbers
function calculator(a: number, b: number): string {
    let sum = `${a} + ${b} = ${a + b}`;
    let sub = `${a} - ${b} = ${a - b}`;
    let mul = `${a} x ${b} = ${a * b}`;
    let div = `${a} / ${b} = ${a / b}`;
    return `${sum}\n ${sub}\n ${mul}\n ${div}\n`
}


//* 11 Names:
const names: string[] = ['olivia', 'emma', 'amelia', 'ava', 'sophia', 'isabella'];

for (let i = 0; i < names.length; i++) {
    const element: string = names[i];
    console.log(element);
}

//* 12 Greetings: 

names.forEach((name: string) => {
    console.log(`Hi ${name}, Welcome to typescript course`);
})


//* 13 Your Own Array:

const vehicles: string[] = ['Ferrari', 'BMW', 'Cadillac', 'Toyota', 'Honda', 'Porsche'];
for (const car of vehicles) {
    console.log(`I would like to own a ${car}`);
}


//* 14 Guest List:
const guests: string[] = ['olivia', 'emma', 'amelia'];
guests.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})


//* 15 Changing Guest List:

console.log(guests[1] + "can't come to dinner");
guests.splice(1, 1, 'ava')

guests.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})


//* 16 More Guests:

guests.unshift('sophia');
guests.splice(2, 0, 'isabella');
guests.push('caldera');

guests.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})


//* 17 Shrinking Guest List: 

console.log("Sorry to say but we can invite only 2 peoples because our dinning table could'nt arrive");

let removedGuests: string[] = guests.splice(2);
removedGuests.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Sorry, but we couldn't invite you to dinner for some issues`);
})

guests.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})

guests.splice(0);
console.log(guests);


//* 18 Seeing the World:
const countries: string[] = ['Pakistan', 'France', 'Germany', 'America', 'Canada'];
console.log("original order:", countries);

let newCountries: string[] = [...countries]
console.log("alphabetical order:", newCountries.sort());
console.log("original order:", countries);

console.log("reverse alphabetical order:", newCountries.reverse());
console.log("original order:", countries);

console.log("reverse order:", countries.reverse());
console.log("original order:", countries.reverse());

console.log("alphabetical order:", countries.sort());
console.log("reverse alphabetical order:", countries.reverse());


//* 19 Dinner Guests: 
const guests2: string[] = ['olivia', 'emma', 'amelia'];
console.log(`${guests2.length} peoples are invited to dinner`);


//* 20 Creating an Array: 

const cities: string[] = ['Karachi', 'KPK', 'Lahore', 'Islamabad']

console.log("List of Cities:");
cities.forEach((city: string) => {
    console.log(city);
});

//* 21 Creating an Object:

const country: {
    name: string;
    capital: string;
    population: number;
    language: string;
} = {
    name: "Pakistan",
    capital: "Islamabad",
    population: 241500000,
    language: "Urdu"
}

//* 22 International Error: 

console.log("Attempting to access a non-existing index in the array:");
console.log(cities[4]);
console.log(cities[3]);


//* 23 Conditional Tests: 

let car: string = 'subaru';

//Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

//Test 2
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

//Test 3
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');

//Test 4
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

//Test 5
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

//Test 6
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);

//Test 7
console.log("Is car.length < 7? I predict True.");
console.log(car.length < 7);

//Test 8
console.log("Is car.charAt(0) === 'i'? I predict False.");
console.log(car.charAt(0) === 'i');

//Test 9
console.log("Is car.includes('bar')? I predict True.");
console.log(car.includes('bar'));

//Test 10
console.log("Is car.startsWith('Sub')? I predict False.");
console.log(car.startsWith('Sub'));


//* 24 More Conditional Tests: 

let str1: string = 'hello';
let str2: string = 'HELLO';
let num1: number = 10;
let num2: number = 5;
let arr: number[] = [1, 2, 3, 4, 5];

console.log("Test for equality with strings:");
console.log(str1 == 'hello');
console.log("Test for inequality with strings:");
console.log(str2 != 'hello');

console.log("Test for lowercase conversion:");
console.log(str2.toLowerCase() == str1);

console.log("Numerical tests:");
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 == 10);
console.log(num2 != 10);

console.log("Test using 'and' operator:");
console.log((num1 > 5) && (num2 < 10));
console.log("Test using 'or' operator:");
console.log((num1 < 5) || (num2 > 10));

console.log("Test for item in array:");
console.log(arr.includes(3));

console.log("Test for item not in array:");
console.log(!arr.includes(6));


//* 25 Alien Colors #1:

let alien_color: string = 'green';

if (alien_color == 'green') {
    console.log('Congratulations! you earned 5 points.');
}


//* 26 Alien Colors #2:

if (alien_color == 'green') {
    console.log('Congratulations! you earned 5 points.');
} else {
    console.log('Congratulations! you earned 10 points.');
}


alien_color = 'yellow';
if (alien_color == 'green') {
    console.log('Congratulations! you earned 5 points.');
} else {
    console.log('Congratulations! you earned 10 points.');
}


//* 27 Alien Colors #3:

function checkTheColor(color: string) {
    if (color == 'green') {
        console.log('Congratulations! you earned 5 points.');
    } else if (color == 'yellow') {
        console.log('Congratulations! you earned 10 points.');
    } else if (color == 'red') {
        console.log('Congratulations! you earned 15 points.');
    }
}

alien_color = 'green';
checkTheColor(alien_color);

alien_color = 'red';
checkTheColor(alien_color);

alien_color = 'yellow';
checkTheColor(alien_color);


//* 28 Stages of Life:

let age: number = 10;

if (age < 2) {
    console.log("The person is a baby.");

} else if ((age >= 2) && (age < 4)) {
    console.log("The person is a toddler.");

} else if ((age >= 4) && (age < 13)) {
    console.log("The person is a kid.");

} else if ((age >= 13) && (age < 20)) {
    console.log("The person is a teenager.");

} else if ((age >= 20) && (age < 65)) {
    console.log("The person is an adult.");

} else {
    console.log("The person is an elder.");
}


//* 29 Favorite Fruit: 

let favorite_fruits: string[] = ['banana', 'apple', 'orange'];

// Check if specific fruits are favorites
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}


//* 30 Hello Admin: 

const usernames: string[] = ['olivia', 'emma', 'admin', 'amelia', 'ava', 'sophia', 'isabella'];

usernames.forEach((name: string) => {
    if (name == 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
})


//* 31 No Users:
if (usernames.length == 0) {
    console.log("We need to find some users!");
} else {
    usernames.splice(0);
}


//* 32 Checking Usernames:

const current_users: string[] = ['olivia', 'emma', 'amelia', 'ava', 'sophia'];
const new_users: string[] = ['amelia', 'isabella', 'emma', 'cinderella', 'sara'];

new_users.forEach((new_user: string) => {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    const lowercase_current_users: string[] = current_users.map(user => user.toLowerCase());
    const lowercase_new_user: string = new_user.toLowerCase();

    // Check if the new username already exists
    if (lowercase_current_users.includes(lowercase_new_user)) {
        console.log(`Sorry, the username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
});


//* 33 Ordinal Numbers:

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((num: number) => {
    if (num == 1) {
        console.log(`${num}st`);

    } else if (num == 2) {
        console.log(`${num}nd`);

    } else if (num == 3) {
        console.log(`${num}rd`);

    } else {
        console.log(`${num}th`);
    }
})

//* 34 Pizzas: 

const favorite_pizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

favorite_pizzas.forEach((pizza: string) => {
    console.log(pizza);
})

favorite_pizzas.forEach((pizza: string) => {
    console.log(`I like ${pizza} pizza`);
})

console.log("\nI really love pizza!");


//* 35 Animals: 

const animals: string[] = ['Cat', 'Hen', 'Rabbit'];

animals.forEach((animal: string) => {
    console.log(animal);
})

animals.forEach((animal: string) => {
    console.log(`A ${animal} would make a great pet.`);
})

console.log('Any of these animals would make a great pet!');


//* 36 T-Shirt: 

function make_shirt(size: string, message: string) {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}

make_shirt("Large", "Hello, World!");


//* 37 Large Shirts:

function make_shirt2(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}

make_shirt2();
make_shirt2("Medium");
make_shirt2("Small", "JavaScript is awesome!");


//* 38 Cities:

function describe_city(city: string, country: string = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}

describe_city('Karachi');
describe_city('KPK');
describe_city('London', 'UK');


//* 49 City Names:

function city_country(city: string, country: string): string {
    return `${city}, ${country}`
}

console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('London', 'UK'));


//* 40 Album: 

// Define a TypeScript interface for an album
type Album = {
    artist: string;
    title: string;
    tracks?: number; 
}

// Function to create an album object
function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Creating objects representing different albums
let album1: Album = make_album("Artist1", "Album1", 43);
let album2: Album = make_album("Artist2", "Album2");
let album3: Album = make_album("Artist3", "Album3", 12);

console.log(album1);
console.log(album2);
console.log(album3);


//* 41 Magicians:

let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Ricky Jay', 'Teller'];

function show_magicians(array: string[]):void {
    array.forEach((element: string) => {
        console.log(element);
    })
}
show_magicians(magicians);


//* 42 Great Magicians: 

// Function to make magicians great
function make_great(array: string[]): string[] {
    return array.map((element: string) => element + " the Great");
}

magicians = make_great(magicians);
show_magicians(magicians);


//* 43 Unchanged Magicians: 

magicians = ['Harry Houdini', 'David Copperfield', 'Ricky Jay', 'Teller'];

// Create a copy of the array using the spread operator
let great_magicians: string[] = make_great([...magicians]);

console.log("Original magicians:");
show_magicians(magicians);

console.log("\nGreat magicians:");
show_magicians(great_magicians);


//* 44 Sandwiches:

function make_sandwich(...items: string[]): void {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    } else {
        console.log("You ordered a sandwich with:");
        items.forEach(item => {
            console.log("\t- " + item);
        });
    }
    console.log("-----------------------------");
}

make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Ketchup", "Swiss Cheese");
make_sandwich();


//* 45 Cars:

// Function to store information about a car
function car_info(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { [key: string]: any } {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Store additional options if provided
    options.forEach(option => {
        for (const key in option) {
            if (option.hasOwnProperty(key)) {
                car[key] = option[key];
            }
        }
    });

    return car;
}

let myCar = car_info("Toyota", "Corolla", {color: "blue", year: 2022});

console.log(myCar);




