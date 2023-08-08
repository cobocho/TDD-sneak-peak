import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders main page correctly', () => {
  render(<App />);
  const linkEl = screen.getByText(/count is 0/i);
  expect(linkEl).toBeInTheDocument();
});
