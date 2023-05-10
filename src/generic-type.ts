// Generic type examples

type GenericArr<T> = Array<T>;

// const rollNoNum: Array<number> = [23, 79, 45, 68];
// const rollNoStr: Array<string> = ['19', '34', '89', '56'];
// const isGoodStudents: Array<boolean> = [true, false];

const rollNoNum: GenericArr<number> = [23, 79, 45, 68];
const rollNoStr: GenericArr<string> = ['19', '34', '89', '56'];
const isGoodStudents: GenericArr<boolean> = [true, false];



type NameRollType = {
    name: string;
    roll: number;
};

const studentNameAndRoll: GenericArr<NameRollType> = [
    {
        name: 'John',
        roll: 23,
    },
    {
        name: 'Kayel',
        roll: 26,
    },
    {
        name: 'Bob',
        roll: 29,
    },
];


// Multiple type params in generic

type GenericTuple<x, y> = [x, y];


const studyAndWork: GenericTuple<string, boolean> = [
    'Oxford University',
    true,
];

interface IJobType {
    company: string;
    salary: number;
};

const job: GenericTuple<IJobType, string> = [
    {
        company: 'Sysonex Inc.',
        salary: 25000,
    },
    'Google',
];


