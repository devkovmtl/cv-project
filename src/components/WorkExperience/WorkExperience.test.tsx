import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkExperience from './WorkExperience';

describe('<WorkExperience />', () => {
  test('should render the input postion', () => {
    const handler = jest.fn();
    render(
      <WorkExperience
        position='testPosition'
        employer='testEmployer'
        taskDescription='testDescription'
        from='2001-08-13'
        until='2001-08-13'
        handleChange={handler}
      />
    );
    const formElement = screen.getByPlaceholderText('Position');
    expect(formElement).toBeInTheDocument();
  });
});
