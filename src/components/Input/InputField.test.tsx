import { fireEvent, render, screen } from '@testing-library/react';
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

  test('should render the textarea', () => {
    const handler = jest.fn();
    render(
      <InputField
        placeholder='Enter your message'
        type='textarea'
        name='message'
        value='Enter your message'
        handleChange={handler}
        dataCategory='test'
      />
    );

    const textAreaElement = screen.getByPlaceholderText('Enter your message');
    userEvent.type(textAreaElement, 'New message');
    expect(handler).toHaveBeenCalledTimes('New message'.length);
  });

  // test('should have the correct value', () => {
  //   const handler = jest.fn();
  //   render(
  //     <InputField
  //       placeholder='Your Name'
  //       type='text'
  //       name='name'
  //       value=''
  //       handleChange={handler}
  //       dataCategory='test'
  //     />
  //   );

  //   const inputElement = screen.getByPlaceholderText(
  //     'Your Name'
  //   ) as HTMLInputElement;
  //   fireEvent.change(inputElement, { target: { value: 'Bob' } });
  //   expect(inputElement.value).toBe('Bob');
  // });
});
