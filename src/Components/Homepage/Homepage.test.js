import {render, screen} from "@testing-library/react";
import {Homepage} from "./Homepage";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("BrowsePage", () => {
  it("Homepage should load with header, and checkboxes", async () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    expect(screen.getByText(/Fashion/i)).toBeInTheDocument();
    expect(screen.getByText(/Armor/i)).toBeInTheDocument();
    expect(screen.getByText(/Weapons/i)).toBeInTheDocument();
    expect(screen.getByText(/Back/i)).toBeInTheDocument();
  });

  it.skip("Checkbox should fire selectionsToUpdate", async () => {
    const updateSelections = jest.fn();
    render(
      <MemoryRouter>
        <Homepage updateSelection={updateSelections} />
      </MemoryRouter>
    );
    userEvent.click(screen.getByTestId("Armor-test"));
    userEvent.click(screen.getByTestId("Weapons-test"));
    userEvent.click(screen.getByTestId("Back-test"));
    expect(updateSelections).toHaveBeenCalledTimes(3);
    screen.debug()
  });
});
