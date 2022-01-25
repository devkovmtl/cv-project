import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonalInformation from './PersonalInformation';

describe('<PersonalInformation />', () => {
  test('should render', () => {
    const handler = jest.fn();
    render(
      <PersonalInformation
        fname='fName'
        lname='lName'
        address='Some address'
        email='some@email.com'
        phoneNumer='123-456-6987'
        description='some description'
        title='some title'
        handleChange={handler}
      />
    );

    const inputNameElement = screen.getByPlaceholderText('First Name');
    expect(inputNameElement).toBeInTheDocument();
  });
});
