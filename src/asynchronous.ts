// Asynchronous typescript

const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
            const data: string = 'Data is fached';

            if (data) {
                resolve(data);
            } else {
                reject('Rejected request');
            }
    });
};


const getPromise = async (): Promise<string> => {
    const data = await makePromise();
    return data;
};


interface IObjPromise {
    name: string;
    roll: number;
}

const makeObjPromise = (): Promise<IObjPromise> => {
    return new Promise<IObjPromise>((resolve, reject) => {
        const data: IObjPromise = { 
            name: 'John',
            roll: 22,
         };

         if (data) {
            resolve(data);
         } else {
            reject('Request rejected');
         }
    });
};

const getObjPromise = async (): Promise<IObjPromise> => {
    const data = await makeObjPromise();
    return data;
};



// Fetch original data from API (JSON Placeholder)

interface IUsers {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      }
    },
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
}

const getUsers = async (): Promise<IUsers> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
};

const getUsersData = async (): Promise<void> => {
    const result = await getUsers();
    console.log(result);
};

getUsersData();

