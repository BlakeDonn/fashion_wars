import {SkinDetails} from './SkinDetails';
import {render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
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
    screen.debug()
  });
});
