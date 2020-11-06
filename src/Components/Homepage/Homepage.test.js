import { render, screen } from '@testing-library/react';
import {Homepage} from './Homepage';

test('renders learn react link', () => {
  render(<Homepage />);
  const linkElement = screen.getByText(/Homepage/i);
  expect(linkElement).toBeInTheDocument();
});
