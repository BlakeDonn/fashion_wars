import { render, screen } from '@testing-library/react';
import {PreviewSkin} from './PreviewSkin';

test('renders with Skin', () => {
  render(<PreviewSkin />);
  const linkElement = screen.getByText(/Skin/i);
  expect(linkElement).toBeInTheDocument();
});
