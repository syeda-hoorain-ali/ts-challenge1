// Function to store information about a car
function car_info1(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { [key: string]: any } {
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

let myCar1 = car_info1("Toyota", "Corolla", {color: "blue", year: 2022});

console.log(myCar1);
