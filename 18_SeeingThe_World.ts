const countries1: string[] = ['Pakistan', 'France', 'Germany', 'America', 'Canada'];
console.log("original order:", countries1);

let newCountries1: string[] = [...countries]
console.log("alphabetical order:", newCountries1.sort());
console.log("original order:", countries1);

console.log("reverse alphabetical order:", newCountries1.reverse());
console.log("original order:", countries1);

console.log("reverse order:", countries1.reverse());
console.log("original order:", countries1.reverse());

console.log("alphabetical order:", countries1.sort());
console.log("reverse alphabetical order:", countries1.reverse());