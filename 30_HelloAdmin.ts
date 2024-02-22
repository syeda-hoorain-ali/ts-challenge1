const usernames1: string[] = ['olivia', 'emma', 'admin', 'amelia', 'ava', 'sophia', 'isabella'];

usernames1.forEach((name: string) => {
    if (name == 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
})





