import "./App.css";
import {Homepage} from "../Homepage/Homepage";
import React, {useState} from "react";
import {Route} from "react-router-dom";

export const App = () => {
  const [selections, setSelections] = useState({
    armor: false,
    weapons: false,
    dyes: false,
  });
  const updateSelections = (e) => {
    let selectionsToUpdate = selections;
    selectionsToUpdate[e.target.name] = !selectionsToUpdate[e.target.name];
    setSelections(selectionsToUpdate);
  };
  return (
    <div className="App">
      <header className="">
        <Route path="/">
          <Homepage updateSelections={updateSelections} />
        </Route>
      </header>
    </div>
  );
};
