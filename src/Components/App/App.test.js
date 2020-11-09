import {render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import {getUserSkins, getAllSkins, getFilteredSkins} from "../../apiCalls.js";
import {App} from "./App";
jest.mock("../../apiCalls.js");

describe("BrowsePage", () => {
  it("Renders the homepage by default", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Fashion/i)).toBeInTheDocument();
  });

  it("User should be able to get to the results page and see their skins", async () => {
    getUserSkins.mockResolvedValue(new Array(200).fill().map((_, i) => (i)))
    getAllSkins.mockResolvedValue(new Array(400).fill().map((_, i) => (i)))
    getFilteredSkins.mockResolvedValue([
      {
        "name": "Bifrost",
        "type": "Weapon",
      },
      {
        "name": "Invisible Boots",
        "type": "Armor",
      },
      {
        "name": "Ad-Infinium",
        "type": "Back",
      }
    ])
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByTestId("Armor-test"));
    userEvent.click(screen.getByTestId("Weapons-test"));
    userEvent.click(screen.getByTestId("Back-test"));
    userEvent.click(screen.getByRole('button', {name: 'Find skins!'}));
    await waitFor(() => expect(screen.getByText(/Skins you need to unlock!/i)).toBeInTheDocument())
    expect(screen.getByText(/Bifrost/i)).toBeInTheDocument()
    expect(screen.getByText(/Invisible Boots/i)).toBeInTheDocument()
    expect(screen.getByText(/Ad-Infinium/i)).toBeInTheDocument()
  });

  it("User should only see the categories they select", async () => {
    getUserSkins.mockResolvedValue(new Array(200).fill().map((_, i) => (i)))
    getAllSkins.mockResolvedValue(new Array(400).fill().map((_, i) => (i)))
    getFilteredSkins.mockResolvedValue([
      {
        "name": "Bifrost",
        "type": "Weapon",
      },
      {
        "name": "Invisible Boots",
        "type": "Armor",
      },
      {
        "name": "Ad-Infinium",
        "type": "Back",
      }
    ])
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByTestId("Armor-test"));
    userEvent.click(screen.getByTestId("Weapons-test"));
    userEvent.click(screen.getByRole('button', {name: 'Find skins!'}));
    await waitFor(() => expect(screen.getByText(/Skins you need to unlock!/i)).toBeInTheDocument())
    expect(screen.getByText(/Bifrost/i)).toBeInTheDocument()
  });
});
