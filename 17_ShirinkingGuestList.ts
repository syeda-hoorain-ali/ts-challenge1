const guests5: string[] = ['olivia', 'emma', 'amelia'];
guests5.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})


// Changing Guest List:
console.log(guests5[1] + "can't come to dinner");
guests5.splice(1, 1, 'ava')

guests5.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})


// Adding More Guests:
guests5.unshift('sophia');
guests5.splice(2, 0, 'isabella');
guests5.push('caldera');

guests5.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})


// Shrinking Guest List: 
console.log("Sorry to say but we can invite only 2 peoples because our dinning table could'nt arrive");

let removedGuests1: string[] = guests5.splice(2);
removedGuests1.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Sorry, but we couldn't invite you to dinner for some issues`);
})

guests5.forEach((guest: string) => {
    console.log(`Hi ${guest}, \n Would you like to come to dinner tonight`);
})

guests5.splice(0);
console.log(guests5);
