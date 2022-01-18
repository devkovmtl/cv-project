import React from 'react';
import { render, screen } from '@testing-library/react';
import { PersonalInformation } from '..';

describe('<PersonalInformation />', () => {
  test('should render', () => {
    render(<PersonalInformation />);

    const headerElement = screen.getByText(/Personal Information/i);
    expect(headerElement).toBeInTheDocument();
  });
});
