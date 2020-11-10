import "./Homepage.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export const Homepage = () => {
  const [selections, setSelections] = useState({
    Armor: false,
    Weapons: false,
    Back: false,
  });
  const updateSelections = (e) => {
    let selectionsToUpdate = selections;
    selectionsToUpdate[e.target.name] = !selectionsToUpdate[e.target.name];
    setSelections(selectionsToUpdate);
  };
  const determineStateToPost = () => {
    const choices = Object.keys(selections);
    const finalChoices = choices.filter((selection) => selections[selection]);
    return `/results/${finalChoices}`;
  };

  const skinTypes = () => {
    let skins = ["Armor", "Weapons", "Back"];
    return skins.map((skin, i) => {
      return (
        <div className={skin}>
          <input
            key={i}
            type="checkbox"
            className={skin}
            data-testid={`${skin}-test`}
            name={skin}
            onClick={updateSelections}
          ></input>
          <label htmlFor="armor" className={`${skin} -label`}>
            {skin}
          </label>
        </div>
      );
    });
  };
  return (
    <div className="parent">
      <section className="container">
        <header className="home-header"></header>
        <main className="home-main">
          <div className="checkbox-container">
            <img
              src="https://fontmeme.com/permalink/201110/b986019efece3c38d0c95103a681e63a.png"
              alt="fashion wars logo"
            ></img>
            <h3 className="check-header">
              Which skins would you like to find?
            </h3>
            {skinTypes()}
            <Link to={determineStateToPost}>
              <button className="skin-submit">Find skins!</button>
            </Link>
          </div>
        </main>
        <footer className="home-footer"></footer>
      </section>
    </div>
  );
};
