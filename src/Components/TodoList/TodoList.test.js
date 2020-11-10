import {TodoList} from './TodoList';
import {render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
jest.mock("../../apiCalls.js");

describe('renders with Skin', () => {
  it("Should display user selected skins", () => {
    const todoSkins =
      [{
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
      }]
    render(<MemoryRouter><TodoList location={{todoSkins: todoSkins}} /></MemoryRouter>)
    expect(screen.getByAltText(/Bifrost/i)).toBeInTheDocument()
  });
  it("Should display as many skins as selected by user", () => {
    const todoSkins =
      [{
        "name": "Bifrost",
        "type": "Weapon",
      },
      {
        "name": "Invisible Boots",
        "type": "Armor",
      },
      {
        "name": "Invisible Hat",
        "type": "Armor",
      },
      {
        "name": "Invisible Gloves",
        "type": "Armor",
      },
      {
        "name": "Ad-Infinium",
        "type": "Back",
      }]
    render(<MemoryRouter><TodoList location={{todoSkins: todoSkins}} /></MemoryRouter>)
    expect(screen.getByAltText(/Invisible Gloves/i)).toBeInTheDocument()
  });

});
