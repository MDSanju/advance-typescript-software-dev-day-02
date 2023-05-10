"use strict";
// Type assertion examples
let x;
x = "Hello World!";
x.length;
// Another way to define type assertion
x.length;
const kgToGram = (param) => {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The converted result: ${value} gram`;
    }
    else if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
};
const resultToBeNumber = kgToGram(1000);
const resultToBeString = kgToGram('1000');
// Another way to define type assertion
const resultToBeNumber2 = kgToGram(2000);
const resultToBeString2 = kgToGram('2000');
try {
}
catch (error) {
    console.log(error.message);
}
