let alien_color3: string = 'green';

function checkTheColor1(color: string) {
    if (color == 'green') {
        console.log('Congratulations! you earned 5 points.');
    } else if (color == 'yellow') {
        console.log('Congratulations! you earned 10 points.');
    } else if (color == 'red') {
        console.log('Congratulations! you earned 15 points.');
    }
}

alien_color3 = 'green';
checkTheColor1(alien_color3);

alien_color3 = 'red';
checkTheColor1(alien_color3);

alien_color3 = 'yellow';
checkTheColor1(alien_color3);
