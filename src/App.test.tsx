import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  test('renders learn react link', () => {
    render(<App />);
    const titleElement = screen.getByText(/Resume Maker/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('should render Personal Information on the page', () => {
    render(<App />);
    const headerElement = screen.getByText(/Personal Information/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('should modify the personal information', () => {
    render(<App />);
    const inputFirstName = screen.getByPlaceholderText(
      'First Name'
    ) as HTMLInputElement;
    fireEvent.change(inputFirstName, { target: { value: 'Bob' } });
    expect(inputFirstName.value).toBe('Bob');
  });

  test('should delete work experience', () => {
    render(<App />);
    const workExperienceDivLength =
      screen.getAllByPlaceholderText('Position').length;
    const deleteWorkExpBtn = screen.getAllByTestId(
      'delete-work-experience-button'
    )[0];

    fireEvent.click(deleteWorkExpBtn);
    const workExperienceDivLengthUpdated =
      screen.getAllByPlaceholderText('Position').length;
    expect(workExperienceDivLengthUpdated).toBe(workExperienceDivLength - 1);
  });

  test('should add work experience', () => {
    render(<App />);
    const workExperienceDivLength =
      screen.getAllByPlaceholderText('Position').length;
    const deleteWorkExpBtn = screen.getAllByTestId(
      'add-work-experience-button'
    )[0];

    fireEvent.click(deleteWorkExpBtn);
    const workExperienceDivLengthUpdated =
      screen.getAllByPlaceholderText('Position').length;
    expect(workExperienceDivLengthUpdated).toBe(workExperienceDivLength + 1);
  });

  test('should delete education', () => {
    render(<App />);
    const educationCardLength =
      screen.getAllByPlaceholderText('Your degree').length;
    const deleteEducationBtn = screen.getAllByTestId(
      'delete-education-button'
    )[0];

    fireEvent.click(deleteEducationBtn);
    const educationCardLengthUpdated =
      screen.queryAllByPlaceholderText('Your degree').length;
    expect(educationCardLengthUpdated).toBe(educationCardLength - 1);
  });

  test('should add education', () => {
    render(<App />);
    const educationCardLength =
      screen.getAllByPlaceholderText('Your degree').length;
    const addEducationBtn = screen.getAllByTestId('add-education-button')[0];

    fireEvent.click(addEducationBtn);
    const educationCardLengthupdated =
      screen.getAllByPlaceholderText('Your degree').length;
    expect(educationCardLengthupdated).toBe(educationCardLength + 1);
  });

  test('should update the education form', () => {
    render(<App />);
    const inpputEducationForm = screen.getAllByPlaceholderText(
      'Your degree'
    )[0] as HTMLInputElement;

    fireEvent.change(inpputEducationForm, { target: { value: 'testDegree' } });
    expect(inpputEducationForm.value).toBe('testDegree');
  });

  test('should update the work experience form', () => {
    render(<App />);
    const workExperienceForm = screen.getAllByPlaceholderText(
      'Position'
    )[0] as HTMLInputElement;

    fireEvent.change(workExperienceForm, { target: { value: 'testPosition' } });
    expect(workExperienceForm.value).toBe('testPosition');
  });
});
