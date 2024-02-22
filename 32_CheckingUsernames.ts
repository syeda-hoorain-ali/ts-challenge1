const current_users1: string[] = ['olivia', 'emma', 'amelia', 'ava', 'sophia'];
const new_users1: string[] = ['amelia', 'isabella', 'emma', 'cinderella', 'sara'];

new_users.forEach((new_user: string) => {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    const lowercase_current_users: string[] = current_users1.map(user => user.toLowerCase());
    const lowercase_new_user: string = new_user.toLowerCase();

    // Check if the new username already exists
    if (lowercase_current_users.includes(lowercase_new_user)) {
        console.log(`Sorry, the username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
});