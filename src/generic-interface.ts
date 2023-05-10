// Generic interface

interface MyJobInterface<T, M = null> {
    company: string;
    country: string;
    state: T;
    months?: M;
}

interface OfficeStateInterface {
    salary: string;
    behaviour: string;
    workflow: string;
    isGood: boolean;
}

const firstJob: MyJobInterface<boolean, number> = {
    company: 'Engineer`s Cradle',
    country: 'India',
    state: false,
    months: 3,
};

const secondJob: MyJobInterface<OfficeStateInterface, number> = {
    company: 'DS Legends PTE LTD',
    country: 'Singapore',
    state: {
        salary: 'Very low',
        behaviour: 'Very rude',
        workflow: 'Very unstructured',
        isGood: false,
    },
    months: 6,
};

const thirdJob: MyJobInterface<string> = {
    company: 'Sysonex Inc.',
    country: 'Canada',
    state: 'Currently work',
};


// Multiple generic type

interface PersonInterface<T, J> {
    info: T;
    job: J;
}

interface InfoInterface {
    name: string;
    age: number;
}

interface JobInterface {
    salary: number;
    isStructured: boolean;
}

const person1: PersonInterface<InfoInterface, JobInterface> = {
    info: {
        name: 'John',
        age: 23,
    },
    job: {
        salary: 5000,
        isStructured: true,
    },
};
