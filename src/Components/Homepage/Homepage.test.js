import { render, screen } from '@testing-library/react';
import {Homepage} from './Homepage';

test('renders Homepage', () => {
  render(<Homepage />);
  const linkElement = screen.getByText(/Homepage/i);
  expect(linkElement).toBeInTheDocument();
});
