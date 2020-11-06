import {render, screen} from '@testing-library/react';
import {Homepage} from './Homepage';

test('renders Homepage', () => {
  render(<Homepage />);
  const linkElement = screen.getByText(/Fashion/i);
  expect(linkElement).toBeInTheDocument();
});
