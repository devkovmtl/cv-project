import React from 'react';
import { render, screen } from '@testing-library/react';
import Preview from './Preview';
import {
  EducationType,
  PersonalInformationType,
  WorkExperienceType,
} from '../../type';

const personalInformation: PersonalInformationType = {
  fname: 'testFName',
  lname: 'testLName',
  address: 'testAddress',
  email: 'testEmail',
  description: 'testDescription',
  phoneNumer: '123-456-1234',
  title: 'testTitle',
};

const education: EducationType[] = [
  {
    id: 'testId',
    degree: 'testDegree',
    schoolName: 'testSchoolName',
    from: '2001-12-12',
    until: '2002-12-12',
  },
];

const workExperience: WorkExperienceType[] = [
  {
    id: 'testId',
    employer: 'testEmployer',
    position: 'testPosition',
    taskDescription: 'testDescription',
    from: '2001-12-12',
    until: '2002-12-12',
  },
];

describe('<Preview/>', () => {
  test('should render the personalInfo in doc', () => {
    render(
      <Preview
        personalInformation={personalInformation}
        education={education}
        workExperience={workExperience}
      />
    );

    const h3Element = screen.getByText('testFName testLName');

    expect(h3Element).toBeInTheDocument();
  });

  test('should render the education in doc', () => {
    render(
      <Preview
        personalInformation={personalInformation}
        education={education}
        workExperience={workExperience}
      />
    );

    const edElement = screen.getByText('testDegree');

    expect(edElement).toBeInTheDocument();
  });

  test('should render the workExperience in doc', () => {
    render(
      <Preview
        personalInformation={personalInformation}
        education={education}
        workExperience={workExperience}
      />
    );

    const employerEl = screen.getByText('testEmployer');

    expect(employerEl).toBeInTheDocument();
  });
});
