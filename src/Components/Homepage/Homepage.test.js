import {render, screen} from '@testing-library/react';
import {Homepage} from './Homepage';
import {MemoryRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe("BrowsePage", () => {
  it("Homepage should load with header, and checkboxes", async () => {
    render(<Homepage />);
    expect(screen.getByText(/Fashion/i)).toBeInTheDocument();
    expect(screen.getByText(/Armor/i)).toBeInTheDocument();
    expect(screen.getByText(/Weapons/i)).toBeInTheDocument();
    expect(screen.getByText(/Dyes/i)).toBeInTheDocument();
  });

  it("Checkbox should fire selectionsToUpdate", async () => {
    const mockSelectionsToUpdate = jest.fn()
    render(<Homepage updateSelections={mockSelectionsToUpdate} />);
    userEvent.click(screen.getByTestId('armor-test'))
    userEvent.click(screen.getByTestId('weapons-test'))
    userEvent.click(screen.getByTestId('dyes-test'))
    expect(mockSelectionsToUpdate).toHaveBeenCalledTimes(3);
  });

});
