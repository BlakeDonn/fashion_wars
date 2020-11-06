import {render, screen} from '@testing-library/react';
import {Homepage} from './Homepage';

describe("BrowsePage", () => {
  it("Homepage should load with header, and checkboxes", async () => {
    render(<Homepage />);
    expect(screen.getByText(/Fashion/i)).toBeInTheDocument();
    expect(screen.getByText(/Armor/i)).toBeInTheDocument();
    expect(screen.getByText(/Weapons/i)).toBeInTheDocument();
    expect(screen.getByText(/Dyes/i)).toBeInTheDocument();
    screen.debug()
  });

});
