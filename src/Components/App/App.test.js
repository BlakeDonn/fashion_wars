import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import {App} from "./App";

describe("BrowsePage", () => {
  it("Renders the homepage by default", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Fashion/i)).toBeInTheDocument();
  });
  it("User should be brought to results page when clicking skin submit button", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByRole('button', {name: 'Find skins!'}));
    expect(screen.getByText(/Skins you need to unlock!/i)).toBeInTheDocument();
  });
});
