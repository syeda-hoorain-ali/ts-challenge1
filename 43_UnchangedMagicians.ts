let magicians3: string[] = ['Harry Houdini', 'David Copperfield', 'Ricky Jay', 'Teller'];

function show_magicians3(array: string[]):void {
    array.forEach((element: string) => {
        console.log(element);
    })
}
show_magicians3(magicians3);


// Function to make magicians great
function make_great2(array: string[]): string[] {
    return array.map((element: string) => element + " the Great");
}

// Create a copy of the array using the spread operator
let great_magicians3: string[] = make_great2([...magicians3]);

console.log("Original magicians3:");
show_magicians3(magicians3);

console.log("\nGreat magicians3:");
show_magicians3(great_magicians3);