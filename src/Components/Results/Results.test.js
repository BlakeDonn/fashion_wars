import {Results} from "./Results";
import {render, screen, waitFor} from "@testing-library/react";
import {act} from 'react-dom/test-utils'
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import {getUserSkins, getAllSkins, getFilteredSkins} from "../../apiCalls.js";
jest.mock("../../apiCalls.js");
const filterSkinsByType = jest.fn()


beforeEach(() => {
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
})


describe("Results", () => {
  it("Results page should render with headers", async () => {
    act(() => {
      render(<Results match={{params: {results: "Armor,Weapons,Back"}}} />)
    });
    expect(screen.getByText(/Skins you need to unlock!/i)).toBeInTheDocument();
    expect(screen.getByText(/Armor/i)).toBeInTheDocument();
    expect(screen.getByText(/Backpieces/i)).toBeInTheDocument();
    expect(screen.getByText(/Weapons/i)).toBeInTheDocument();
  });

  it("Should render with user selected skins after mount", async () => {
    act(() => {
      render(<Results match={{params: {results: "Armor,Weapons,Back"}}} />)
    });
    await waitFor(() => expect(screen.getByText(/Bifrost/i)).toBeInTheDocument())
    expect(screen.getByText(/Bifrost/i)).toBeInTheDocument()
    expect(screen.getByText(/Invisible Boots/i)).toBeInTheDocument()
    expect(screen.getByText(/Ad-Infinium/i)).toBeInTheDocument()
  });

  it("Should only load the selections the user has made", async () => {
    act(() => {
      render(<Results match={{params: {results: "Armor"}}} />)
    });
    await waitFor(() => expect(screen.getByText(/Invisible Boots/i)).toBeInTheDocument())
    expect(screen.getByText(/Invisible Boots/i)).toBeInTheDocument()
    screen.debug()
  });

});
