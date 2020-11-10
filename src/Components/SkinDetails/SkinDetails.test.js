import { SkinDetails } from "./SkinDetails";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { getImage } from "../../apiCalls";
import "@testing-library/jest-dom";
jest.mock("../../apiCalls.js");

describe("renders with Skin", () => {
  it("Should load a preview of the skins icon", () => {
    const testTry = {
      details: {
        type: "Chest",
        weight_class: "Heavy",
      },
      name: "Exalted Coat",
      icon: "Test Icon",
      type: "Weapon",
      id: "250",
    };
    render(
      <MemoryRouter>
        <SkinDetails location={{ skinDetails: testTry }} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Exalted Coat/i)).toBeInTheDocument();
  });

  it("Should load a different type of skin", () => {
    const testTry = {
      details: {
        type: "Boots",
        weight_class: "Heavy",
      },
      name: "Invisible Boots",
      icon: "Test Icon",
      type: "Armor",
      id: "100",
    };
    render(
      <MemoryRouter>
        <SkinDetails location={{ skinDetails: testTry }} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Invisible Boots/i)).toBeInTheDocument();
  });

  it("Should mount with img src if there is one", async () => {
    getImage.mockResolvedValue("https://wiki.guildwars2.com/SplintCoat");
    const testTry = {
      details: {
        type: "Chest",
        weight_class: "Heavy",
      },
      name: "Splint Coat",
      icon: "Test Icon",
      type: "Weapon",
      id: "250",
    };
    render(
      <MemoryRouter>
        <SkinDetails location={{ skinDetails: testTry }} />
      </MemoryRouter>
    );
    await waitFor(() =>
      expect(screen.getByTestId("preview-test").src).toBe(
        "https://wiki.guildwars2.com/SplintCoat"
      )
    );
    expect(screen.getByAltText("Splint Coat set preview")).toBeInTheDocument();
  });

  it("Should display image not found if bad url path", async () => {
    getImage.mockResolvedValue("https://i.imgur.com/aAjAlP7.png");
    const testTry = {
      details: {
        type: "Chest",
        weight_class: "Heavy",
      },
      name: "Splint Coat",
      icon: "Test Icon",
      type: "Weapon",
      id: "250",
    };
    render(
      <MemoryRouter>
        <SkinDetails location={{ skinDetails: testTry }} />
      </MemoryRouter>
    );
    await waitFor(() =>
      expect(screen.getByTestId("preview-test").src).toBe(
        "https://i.imgur.com/aAjAlP7.png"
      )
    );
    expect(
      screen.getByAltText(
        "No image found, please check wiki link for more info"
      )
    ).toBeInTheDocument();
  });

  it("Should have a clickable icon to bring to wiki", () => {
    const testTry = {
      details: {
        type: "Boots",
        weight_class: "Heavy",
      },
      name: "Invisible Boots",
      icon: "Test Icon",
      type: "Armor",
      id: "100",
    };
    render(
      <MemoryRouter>
        <SkinDetails location={{ skinDetails: testTry }} />
      </MemoryRouter>
    );
    expect(screen.getByTestId(/wiki-icon/i).href).toBe(
      "https://wiki.guildwars2.com/wiki/Invisible%20Boots"
    );
  });

  it("Should have a clickable icon to add to todo list", () => {
    const updateList = jest.fn();
    const testTry = {
      details: {
        type: "Boots",
        weight_class: "Heavy",
      },
      name: "Invisible Boots",
      icon: "Test Icon",
      type: "Armor",
      id: "100",
    };
    render(
      <MemoryRouter>
        <SkinDetails
          location={{ skinDetails: testTry, updateList: updateList }}
        />
      </MemoryRouter>
    );
    userEvent.click(screen.getByAltText("todo-icon"));
    expect(updateList).toHaveBeenCalledTimes(1);
  });
});
