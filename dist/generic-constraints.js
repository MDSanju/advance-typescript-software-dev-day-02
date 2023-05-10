"use strict";
// Generic constraints example
const saasCompanyInfoConstraints = (officeInfo) => {
    const officeName = "NFTz Studio";
    const newInfo = Object.assign({ officeName }, officeInfo);
    return newInfo;
};
const officeInfoConstraints = {
    size: 1000,
    years: 4,
    country: "USA",
    others001: "Good",
};
const companyConstraints = saasCompanyInfoConstraints(officeInfoConstraints);
