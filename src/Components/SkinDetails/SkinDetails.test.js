import {SkinDetails} from './SkinDetails';
import {render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import {getImage} from "../../apiCalls";
import "@testing-library/jest-dom";
jest.mock("../../apiCalls.js");

describe('renders with Skin', () => {
  it("Should load a preview of the skins icon", () => {
    const testTry =
    {
      "name": "Exalted Coat",
      "icon": "Test Icon",
      "type": "Weapon",
      "id": "250"
    }
    render(<MemoryRouter><SkinDetails location={{skinDetails: testTry}} /></MemoryRouter>)
    expect(screen.getByText(/Exalted Coat/i)).toBeInTheDocument()
  });

  it("Should load a different type of skin", () => {
    const testTry =
    {
      "name": "Invisible Boots",
      "icon": "Test Icon",
      "type": "Armor",
      "id": "100"
    }
    render(<MemoryRouter><SkinDetails location={{skinDetails: testTry}} /></MemoryRouter>)
    expect(screen.getByText(/Invisible Boots/i)).toBeInTheDocument()
  });

  it("Should have a clickable icon to brin to wiki", () => {
    const testTry =
    {
      "name": "Invisible Boots",
      "icon": "Test Icon",
      "type": "Armor",
      "id": "100"
    }
    render(<MemoryRouter><SkinDetails location={{skinDetails: testTry}} /></MemoryRouter>)
    expect(screen.getByText(/More Info/i).href).toBe("https://wiki.guildwars2.com/wiki/Invisible%20Boots")
  });

  it("Should mount with img src if there is one", async () => {
    getImage.mockResolvedValue("https://wiki.guildwars2.com/SplintCoat")
    const testTry =
    {
      "name": "Splint Coat",
      "icon": "Test Icon",
      "type": "Weapon",
      "id": "250"
    }
    render(<MemoryRouter><SkinDetails location={{skinDetails: testTry}} /></MemoryRouter>)
    await waitFor(() => expect(screen.getByTestId("preview-test").src).toBe("https://wiki.guildwars2.com/SplintCoat"))
    expect(screen.getByAltText("Splint Coat set preview")).toBeInTheDocument()
  });


  it("Should display image not found if bad url path", async () => {
    getImage.mockResolvedValue("https://i.imgur.com/aAjAlP7.png")
    const testTry =
    {
      "name": "Splint Coat",
      "icon": "Test Icon",
      "type": "Weapon",
      "id": "250"
    }
    render(<MemoryRouter><SkinDetails location={{skinDetails: testTry}} /></MemoryRouter>)
    await waitFor(() => expect(screen.getByTestId("preview-test").src).toBe("https://i.imgur.com/aAjAlP7.png"))
    expect(screen.getByAltText("No image found, please check wiki link for more info")).toBeInTheDocument()
  });
});
