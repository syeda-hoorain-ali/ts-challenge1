let magicians2: string[] = ['Harry Houdini', 'David Copperfield', 'Ricky Jay', 'Teller'];

function show_magicians2(array: string[]):void {
    array.forEach((element: string) => {
        console.log(element);
    })
}
show_magicians2(magicians2);

// Function to make magicians great
function make_great1(array: string[]): string[] {
    return array.map((element: string) => element + " the Great");
}

magicians2 = make_great1(magicians2);
show_magicians2(magicians2);