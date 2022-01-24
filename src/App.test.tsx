import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe.skip('<App />', () => {
  test('renders learn react link', () => {
    render(<App />);
    const titleElement = screen.getByText(/cv project/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('should render Personal Information on the page', () => {
    render(<App />);
    const headerElement = screen.getByText(/Personal Information/i);
    expect(headerElement).toBeInTheDocument();
  });
});
