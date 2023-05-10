// Interface examples

interface IUser {
  // We should use interface only for object type data
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  // Extends interface useful & interesting thing of interface
  role: string;
}

const userWithInterface: IExtendedUser = {
  name: "John Doe",
  age: 25,
  role: "Admin",
};

// Function signature with interface

interface ISumFunc {
  (num1: number, num2: number): number;
}

const sum: ISumFunc = (num1, num2) => num1 + num2;

// Index signature of interface
interface IRollNumbers {
  [index: number]: number;
}

const rollNumbers: IRollNumbers = [1, 5, 6];
