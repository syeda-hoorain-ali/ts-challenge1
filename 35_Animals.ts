const animals1: string[] = ['Cat', 'Hen', 'Rabbit'];

animals1.forEach((animal: string) => {
    console.log(animal);
})

animals1.forEach((animal: string) => {
    console.log(`A ${animal} would make a great pet.`);
})

console.log('Any of these animals would make a great pet!');
