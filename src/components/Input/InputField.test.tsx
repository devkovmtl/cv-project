import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputField from './InputField';

describe('<Input />', () => {
  test('should render the input', () => {
    const handler = jest.fn();
    render(
      <InputField
        placeholder='Your Name'
        type='text'
        name='name'
        value=''
        handleChange={handler}
        dataCategory='test'
      />
    );

    const inputElement = screen.getByPlaceholderText('Your Name');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('name', 'name');
  });

  test('should call the handlechange on input', () => {
    const handler = jest.fn();
    render(
      <InputField
        placeholder='Your Name'
        type='text'
        name='name'
        value=''
        handleChange={handler}
        dataCategory='test'
      />
    );

    const inputElement = screen.getByPlaceholderText('Your Name');
    userEvent.type(inputElement, 'Bob');
    expect(handler).toHaveBeenCalledTimes(3);
  });
});
