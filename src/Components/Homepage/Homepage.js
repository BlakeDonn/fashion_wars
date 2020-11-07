import "./Homepage.scss";
import {Link} from "react-router-dom";
import React, {useState} from "react";

export const Homepage = (props) => {
  const [selections, setSelections] = useState({
    armor: false,
    weapons: false,
    back: false,
  });
  const updateSelections = (e) => {
    let selectionsToUpdate = selections;
    selectionsToUpdate[e.target.name] = !selectionsToUpdate[e.target.name];
    setSelections(selectionsToUpdate);
  };
  const determineStateToPost = () => {
    const choices = Object.keys(selections)
    const finalChoices = choices.map(selection => selections[selection] ? selection : null)
    return `/results/${finalChoices}`;
  };
  const skinTypes = () => {
    let skins = ["armor", "weapons", "back"];
    return skins.map((skin, i) => {
      return (
        <div className={skin}>
          <input
            key={i}
            type="checkbox"
            className={skin}
            data-testid={`${skin} -test`}
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
        <header className="home-header">Header</header>
        <main className="home-main">
          <h1>Welcome To Fashion Wars !</h1>
          <div className="checkbox-container">
            <h3 className="check-header">
              Which skins would you like to find?
            </h3>
            {skinTypes()}
            <Link to={determineStateToPost}>
              <button className="skin-submit">Find skins!</button>
            </Link>
          </div>
        </main>
        <footer className="home-footer">Footer Content</footer>
      </section>
    </div>
  );
};
