let str3: string = 'hello';
let str4: string = 'HELLO';
let num3: number = 10;
let num4: number = 5;
let arr1: number[] = [1, 2, 3, 4, 5];

console.log("Test for equality with strings:");
console.log(str3 == 'hello');
console.log("Test for inequality with strings:");
console.log(str4 != 'hello');

console.log("Test for lowercase conversion:");
console.log(str4.toLowerCase() == str3);

console.log("Numerical tests:");
console.log(num3 > num4);
console.log(num3 >= num4);
console.log(num3 < num4);
console.log(num3 <= num4);
console.log(num3 == 10);
console.log(num4 != 10);

console.log("Test using 'and' operator:");
console.log((num3 > 5) && (num4 < 10));
console.log("Test using 'or' operator:");
console.log((num3 < 5) || (num4 > 10));

console.log("Test for item in array:");
console.log(arr1.includes(3));

console.log("Test for item not in array:");
console.log(!arr1.includes(6));