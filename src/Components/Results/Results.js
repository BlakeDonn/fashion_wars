import "./Results.scss";
import React, {useState} from "react";

export const Results = () => {
  const [neededSkins, setNeeededSkins] = useState({
    armor: [],
    weapons: [],
    dyes: [],
  })

  const updateUserSkins = (e) => {
    let selectionsToUpdate = selections;
    selectionsToUpdate.userSkins =
      setSelections(selectionsToUpdate);
  };
  return (
    <div className="results">
      <header className='results-header'>
        <h1>Skins you need to unlock!</h1>
      </header>
      <div className="left-sidebar">right-side-for-armor</div>
      <main className='results-main'>right-side-for-weapons</main>
      <div className="right-sidebar">right-side-for-dyes</div>
      <footer className='results-footer'></footer>
    </div>
  );
};
