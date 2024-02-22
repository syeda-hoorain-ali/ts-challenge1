function make_sandwich1(...items: string[]): void {
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

make_sandwich1("Ham", "Cheese", "Lettuce");
make_sandwich1("Ketchup", "Swiss Cheese");
make_sandwich1();