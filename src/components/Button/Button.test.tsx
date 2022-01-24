import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '..';

const MockComponent = () => <div>MockComponent</div>;

describe('<Button />', () => {
  test('should render the button', () => {
    const handler = jest.fn();

    render(
      <Button
        handleClick={handler}
        children={<MockComponent />}
        classList='my-button'
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('my-button');
  });

  test('should render react string inside of the button', () => {
    const handler = jest.fn();
    render(
      <Button
        handleClick={handler}
        children={'Test My Button'}
        classList='my-button'
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Test My Button');
  });

  test('should render react element inside of the button', () => {
    const handler = jest.fn();
    render(
      <Button
        handleClick={handler}
        children={<MockComponent />}
        classList='my-button'
      />
    );

    const divChild = screen.getByText('MockComponent');
    expect(divChild).toBeInTheDocument();
  });

  test('should click on the button', () => {
    const handler = jest.fn();

    render(
      <Button
        handleClick={handler}
        children={<MockComponent />}
        classList='my-button'
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
