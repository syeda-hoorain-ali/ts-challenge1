const guests3: string[] = ['olivia', 'emma', 'amelia'];
guests3.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})

// Changing Guest List:
console.log(guests3[1] + "can't come to dinner");
guests3.splice(1, 1, 'ava')

guests3.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})
