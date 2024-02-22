function rollDice1(): number {
    return Math.ceil(Math.random() * 6)
}

// takes two values and return all operations with those numbers
function calculator1(a: number, b: number): string {
    let sum = `${a} + ${b} = ${a + b}`;
    let sub = `${a} - ${b} = ${a - b}`;
    let mul = `${a} x ${b} = ${a * b}`;
    let div = `${a} / ${b} = ${a / b}`;
    return `${sum}\n ${sub}\n ${mul}\n ${div}\n`
}