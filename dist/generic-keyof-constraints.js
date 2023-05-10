"use strict";
// keyof use in generic
// Usecase of keyof
function getProperty(obj, key) {
    return obj[key];
}
;
const property = getProperty({ name: 'John', age: 20 }, 'age');
