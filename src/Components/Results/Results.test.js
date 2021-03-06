import { Results } from "./Results";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { getUserSkins, getAllSkins, getFilteredSkins } from "../../apiCalls.js";
jest.mock("../../apiCalls.js");

beforeEach(() => {
  getUserSkins.mockResolvedValue(new Array(200).fill().map((_, i) => i));
  getAllSkins.mockResolvedValue(new Array(400).fill().map((_, i) => i));
  getFilteredSkins.mockResolvedValue([
    {
      name: "Bifrost",
      type: "Weapon",
    },
    {
      name: "Invisible Boots",
      type: "Armor",
    },
    {
      name: "Ad-Infinium",
      type: "Back",
    },
  ]);
});

describe("Results", () => {
  it("Results page should render with headers", async () => {
    render(
      <MemoryRouter>
        <Results match={{ params: { results: "Armor,Weapons,Back" } }} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Skins you need to unlock!/i)).toBeInTheDocument();
    expect(screen.getByText(/Armor/i)).toBeInTheDocument();
    expect(screen.getByText(/Backpieces/i)).toBeInTheDocument();
    expect(screen.getByText(/Weapons/i)).toBeInTheDocument();
    screen.debug();
  });

  it("Should render with user selected skins after mount", async () => {
    render(
      <MemoryRouter>
        <Results match={{ params: { results: "Armor,Weapons,Back" } }} />
      </MemoryRouter>
    );
    await waitFor(() =>
      expect(screen.getByAltText(/Bifrost/i)).toBeInTheDocument()
    );
    expect(screen.getByAltText(/Bifrost/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Invisible Boots/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Ad-Infinium/i)).toBeInTheDocument();
  });

  it("Should only load the selections the user has made", async () => {
    render(
      <MemoryRouter>
        <Results match={{ params: { results: "Armor" } }} />
      </MemoryRouter>
    );
    await waitFor(() =>
      expect(screen.getByAltText(/Invisible Boots/i)).toBeInTheDocument()
    );
    expect(screen.getByAltText(/Invisible Boots/i)).toBeInTheDocument();
  });
});
