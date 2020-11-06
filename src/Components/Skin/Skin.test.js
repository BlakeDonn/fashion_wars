import { render, screen } from '@testing-library/react';
import {Skin} from './Skin';

test('renders with Skin', () => {
  render(<Skin />);
  const linkElement = screen.getByText(/Skin/i);
  expect(linkElement).toBeInTheDocument();
});
