import "./Results.scss";
import React, {useState, useEffect} from "react";
import {getUserSkins, getAllSkins, getFilteredSkins} from "../../apiCalls";

export const Results = (props) => {
  const [neededSkins, setNeeededSkins] = useState('{}');
  const getNeededSkins = async () => {
    const userSkins = await getUserSkins();
    const allSkins = await getAllSkins();
    return allSkins.filter((skin) => {
      return !userSkins.includes(skin);
    });
  };
  const filterSkinsByType = async (skins) => {
    const allNeededSkins = await getNeededSkins();
    let counter = Math.floor(allNeededSkins.length / 200);
    let i = 1;
    let start = 0
    stateHolder = {
      armor: [],
      weapons: [],
      dyes: [],
    }
    while (i < counter) {
      const joinedSkins = allNeededSkins.join(",").slice(start, 200);
      const skinsForUser = await getFilteredSkins(joinedSkins);

    }
  };
  useEffect(() => {
    console.log(props.match.params);
    filterSkinsByType();
  });

  return (
    <div className="results">
      <header className="results-header">
        <h1>Skins you need to unlock!</h1>
      </header>
      <div className="left-sidebar">right-side-for-armor</div>
      <main className="results-main">right-side-for-weapons</main>
      <div className="right-sidebar">right-side-for-dyes</div>
      <footer className="results-footer"></footer>
    </div>
  );
};
