"use strict";
// Generic type with function
const createArray = (param) => {
    return [param];
};
const res1 = createArray(14);
const res2 = createArray("Joel");
const course = createArray({
    courseName: "Full Stack Development with Jhanker Mahabub",
    instructor: "Jhanler Mahabub",
    price: 5500,
});
// Double parameters generic
const createArrayDualGen = (param1, param2) => {
    return [param1, param2];
};
function createArrayDualGenNormalFnc(param1, param2) {
    return [param1, param2];
}
createArrayDualGen("Full time worker", {
    salary: 25000,
    year: 2,
});
// Spread operator
const saasCompanyInfo = (officeInfo) => {
    const officeName = "NFTz Studio";
    const newInfo = Object.assign({ officeName }, officeInfo);
    return newInfo;
};
const officeInfo = {
    size: 1000,
    years: 4,
    country: "USA",
};
const company = saasCompanyInfo(officeInfo);
