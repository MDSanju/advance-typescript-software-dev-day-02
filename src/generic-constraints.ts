// Generic constraints example

interface MandatoryInterface {
  size: number;
  years: number;
}

const saasCompanyInfoConstraints = <T extends MandatoryInterface>(
  officeInfo: T
) => {
  const officeName = "NFTz Studio";
  const newInfo = { officeName, ...officeInfo };
  return newInfo;
};

interface OfficeInfoConstraintsInterface {
  size: number;
  years: number;
  country: string;
  others001: string;
}

const officeInfoConstraints: OfficeInfoConstraintsInterface = {
  size: 1000,
  years: 4,
  country: "USA",
  others001: "Good",
};

const companyConstraints = saasCompanyInfoConstraints<OfficeInfoConstraintsInterface>(
  officeInfoConstraints
);
