import React from 'react';
import { render, screen } from '@testing-library/react';
import { WorkExperience } from '..';

describe('<WorkExperience />', () => {
  test('should render', () => {
    render(<WorkExperience />);

    const headerElement = screen.getByText(/WorkExperience/i);
    expect(headerElement).toBeInTheDocument();
  });
});
