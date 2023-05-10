// keyof use in generic

type PersonType = {
    name: string;
    age: number;
    address: string;
}

type NewPersonType = keyof PersonType;


// Usecase of keyof

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key];
};

const property = getProperty({ name: 'John', age: 20 }, 'age');

