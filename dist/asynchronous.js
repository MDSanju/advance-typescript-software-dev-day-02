"use strict";
// Asynchronous typescript
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = 'Data is fached';
        if (data) {
            resolve(data);
        }
        else {
            reject('Rejected request');
        }
    });
};
const getPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    return data;
});
const makeObjPromise = () => {
    return new Promise((resolve, reject) => {
        const data = {
            name: 'John',
            roll: 22,
        };
        if (data) {
            resolve(data);
        }
        else {
            reject('Request rejected');
        }
    });
};
const getObjPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makeObjPromise();
    return data;
});
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield response.json();
    return data;
});
const getUsersData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getUsers();
    console.log(result);
});
getUsersData();
