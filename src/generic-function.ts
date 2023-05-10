// Generic type with function

const createArray = <T>(param: T): T[] => {
  return [param];
};

const res1 = createArray<number>(14);
const res2 = createArray<string>("Joel");

interface Course {
  courseName: string;
  instructor: string;
  price: number;
}

const course = createArray<Course>({
  courseName: "Full Stack Development with Jhanker Mahabub",
  instructor: "Jhanler Mahabub",
  price: 5500,
});

// Double parameters generic

const createArrayDualGen = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

function createArrayDualGenNormalFnc<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
}

interface JobInterface2 {
  salary: number;
  year: number;
}

createArrayDualGen<string, JobInterface2>("Full time worker", {
  salary: 25000,
  year: 2,
});

// Spread operator

const saasCompanyInfo = <T>(officeInfo: T) => {
  const officeName = "NFTz Studio";
  const newInfo = { officeName, ...officeInfo };
  return newInfo;
};

interface OfficeInfoInterface {
  size: number;
  years: number;
  country: string;
}

const officeInfo = {
  size: 1000,
  years: 4,
  country: "USA",
};

const company = saasCompanyInfo<OfficeInfoInterface>(officeInfo);
