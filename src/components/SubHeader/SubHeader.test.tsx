import { render, screen } from '@testing-library/react';
import SubHeader from './SubHeader';

describe.skip('<SubHeader />', () => {
  test('should render the input', () => {
    render(<SubHeader title='Test' />);
    const h2Element = screen.getByText('Test');
    expect(h2Element).toBeInTheDocument();
  });
});
