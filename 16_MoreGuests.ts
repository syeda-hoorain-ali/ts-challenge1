const guests4: string[] = ['olivia', 'emma', 'amelia'];
guests4.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})


// Changing Guest List:
console.log(guests4[1] + "can't come to dinner");
guests4.splice(1, 1, 'ava')

guests4.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})


// Adding More Guests:
guests4.unshift('sophia');
guests4.splice(2, 0, 'isabella');
guests4.push('caldera');

guests4.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})