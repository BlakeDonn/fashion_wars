import {PreviewSkin} from './PreviewSkin';
import {render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
jest.mock("../../apiCalls.js");

describe('renders with Skin', () => {
  it("Should load a preview of the skins icon", () => {
    const testTry =
    {
      "name": "Bifrost",
      "icon": "Test Icon",
      "type": "Weapon",
      "id": "250"
    }
    render(<MemoryRouter><PreviewSkin details={testTry} /></MemoryRouter>)
    expect(screen.getByAltText(/Bifrost/i)).toBeInTheDocument()
  });

  it("Should load a different type of skin", () => {
    const testTry =
    {
      "name": "Invisible Boots",
      "icon": "Test Icon",
      "type": "Armor",
      "id": "100"
    }
    render(<MemoryRouter><PreviewSkin details={testTry} /></MemoryRouter>)
    expect(screen.getByAltText(/Invisible Boots/i)).toBeInTheDocument()
  });

});
