import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from './Education';

describe('<Education />', () => {
  test('should render the input to enter the degree', () => {
    const handler = jest.fn();
    render(
      <Education
        degree=''
        schoolName=''
        from=''
        until=''
        handleChange={handler}
      />
    );
    const formElement = screen.getByPlaceholderText('Your degree');
    expect(formElement).toBeInTheDocument();
  });

  test('should render the input to enter the school name', () => {
    const handler = jest.fn();
    render(
      <Education
        degree=''
        schoolName=''
        from=''
        until=''
        handleChange={handler}
      />
    );
    const formElement = screen.getByPlaceholderText('School Name');
    expect(formElement).toBeInTheDocument();
  });

  test('should render the input to enter the from', () => {
    const handler = jest.fn();
    render(
      <Education
        degree=''
        schoolName=''
        from=''
        until=''
        handleChange={handler}
      />
    );
    const formElement = screen.getByPlaceholderText('From');
    expect(formElement).toBeInTheDocument();
  });

  test('should render the input to enter the until', () => {
    const handler = jest.fn();
    render(
      <Education
        degree=''
        schoolName=''
        from=''
        until=''
        handleChange={handler}
      />
    );
    const formElement = screen.getByPlaceholderText('Until');
    expect(formElement).toBeInTheDocument();
  });
});
