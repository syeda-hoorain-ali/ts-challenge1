const guests6: string[] = ['olivia', 'emma', 'amelia'];
guests6.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})


// Changing Guest List:

console.log(guests6[1] + "can't come to dinner");
guests6.splice(1, 1, 'ava')

guests6.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})


console.log(`${guests6.length} peoples are invited to dinner`);