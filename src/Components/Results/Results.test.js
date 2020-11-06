import { render, screen } from '@testing-library/react';
import {Results} from './Results';

test('renders with Results', () => {
  render(<Results />);
  const linkElement = screen.getByText(/Results/i);
  expect(linkElement).toBeInTheDocument();
});
