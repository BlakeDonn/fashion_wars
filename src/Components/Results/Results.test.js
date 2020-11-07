import {Results} from "./Results";
import {render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import {getUserSkins, getAllSkins, getFilteredSkins} from "../../apiCalls.js";
jest.mock("../../apiCalls.js");

getUserSkins.mockResolvedValue([120, 121, 122, 123, 124, 129])
getAllSkins.mockResolvedValue([120, 121, 122, 127, 128, 130])
getFilteredSkins.mockResolvedValue([
  {
    "name": "Bifrost",
    "type": "Weapon",
    "id": 127,
  },
  {
    "name": "Invisible Boots",
    "type": "Armor",
    "id": 128,
  },
  {
    "name": "Ad-Infinium",
    "type": "Back",
    "id": 130,
  }
])

describe("Results", () => {
  it("Results page should render with headers", async () => {
    render(
      <MemoryRouter>
        <Results match={{params: {results: "Armor,Weapons,Back"}}} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Skins you need to unlock!/i)).toBeInTheDocument();
    expect(screen.getByText(/Armor/i)).toBeInTheDocument();
    expect(screen.getByText(/Backpieces/i)).toBeInTheDocument();
    expect(screen.getByText(/Weapons/i)).toBeInTheDocument();
    screen.debug()
  });

  it("Should render with user selected skins after mount", async () => {
    render(
      <MemoryRouter>
        <Results match={{params: {results: "Armor,Weapons,Back"}}} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Skins you need to unlock!/i)).toBeInTheDocument();
    expect(screen.getByText(/Armor/i)).toBeInTheDocument();
    expect(screen.getByText(/Backpieces/i)).toBeInTheDocument();
    expect(screen.getByText(/Weapons/i)).toBeInTheDocument();
    screen.debug()
  });
});
