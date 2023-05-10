// Type assertion examples

let x: any;

x = "Hello World!";

(x as string).length;

// Another way to define type assertion
<string>x.length;

const kgToGram = (param: string | number): string | number | undefined => {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The converted result: ${value} gram`;
  } else if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
};

const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = kgToGram('1000') as string;

// Another way to define type assertion
const resultToBeNumber2 = <number>kgToGram(2000);
const resultToBeString2 = <string>kgToGram('2000');

type CustomErrorType = {
    message: string;
}

try {
    
} catch (error) {
    console.log((error as CustomErrorType).message);
}
