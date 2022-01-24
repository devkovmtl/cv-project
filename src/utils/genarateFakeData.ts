import faker from '@faker-js/faker';

const generateFakePersonalInfo = () => {
  return {
    randomLastName: faker.name.lastName(),
    randomFirstName: faker.name.firstName(),
    // randomPicture: faker.image.avatar(),
    randomJobTitle: faker.name.jobTitle(),
    randomAddress: faker.address.streetAddress(),
    randomEmail: faker.internet.email(),
    randomPhone: faker.phone.phoneNumber(),
    randomDescription: faker.lorem.paragraph(2),
  };
};

const generateFakeWorkExperience = (from: string, until: string) => {
  const [f, u] = faker.date.betweens(from, until);
  return {
    randomPosition: faker.name.jobDescriptor(),
    randomEmployer: faker.company.companyName(),
    // randomFrom: faker.date.
    randomFrom: f.toLocaleDateString(),
    randomUntil: u.toLocaleDateString(),
    randomJobDescription: faker.lorem.paragraph(2),
  };
};

const generateFakeEducation = (from: string, until: string) => {
  const [f, u] = faker.date.betweens(from, until);
  return {
    randomDegree: faker.lorem.word(),
    randomSchoolName: faker.lorem.words(),
    randomFrom: f.toLocaleDateString(),
    randomUntil: u.toLocaleDateString(),
  };
};

export const generateFakeResume = () => {
  return {
    personalInformation: generateFakePersonalInfo(),
    workExperience: [
      generateFakeWorkExperience('2013', '2015'),
      generateFakeWorkExperience('2015', '2020'),
    ],
    education: [generateFakeEducation('1998', '2000')],
  };
};
