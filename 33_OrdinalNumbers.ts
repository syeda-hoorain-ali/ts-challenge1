const numbers1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers1.forEach((num: number) => {
    if (num == 1) {
        console.log(`${num}st`);

    } else if (num == 2) {
        console.log(`${num}nd`);

    } else if (num == 3) {
        console.log(`${num}rd`);

    } else {
        console.log(`${num}th`);
    }
})