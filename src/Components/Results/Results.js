import "./Results.scss";
import {PreviewSkin} from "../PreviewSkin/PreviewSkin";
import React, {useState, useEffect, useRef} from "react";
import {getUserSkins, getAllSkins, getFilteredSkins} from "../../apiCalls";

export const Results = (props) => {
  const mounted = useRef()
  const [neededSkins, setNeeededSkins] = useState({
    Armor: [],
    Weapon: [],
    Back: []
  });

  useEffect(() => {
    if (!mounted.current) {
      const getSkins = async () => {
        let neededSkins = await filterSkinsByType()
        setNeeededSkins({neededSkins})
      }
      getSkins()
      mounted.current = true;
    }
  });

  const getNeededSkins = async () => {
    const userSkins = await getUserSkins();
    const allSkins = await getAllSkins();
    return allSkins.filter((skin) => {
      return !userSkins.includes(skin);
    });
  };

  const filterSkinsByType = async (skins) => {
    const allNeededSkins = await getNeededSkins();
    let counter = Math.floor(allNeededSkins.length / 100);
    let i = 1;
    let start = 0;
    let end = 200;
    let stateHolder = {
      Armor: [],
      Weapon: [],
      Back: [],
      Gathering: []
    }
    while (i < counter) {
      const joinedSkins = allNeededSkins.join(",").slice(start, end);
      const skinsForUser = await getFilteredSkins(joinedSkins);
      skinsForUser.forEach(skin => {
        if (props.match.params.results.includes(skin.type) && skin.name) {
          return stateHolder[skin.type].push(skin)
        }
        return
      })
      i++
      start += 200
      end += 200
    }
    return stateHolder
  }

  const displaySkins = (skinType) => {
    if (neededSkins.neededSkins) {
      return neededSkins.neededSkins[skinType].map(skin => <PreviewSkin details={skin} />)
    }
    return <h3>Loading</h3>
  }

  return (
    <div className="results">
      <header className="results-header">
        <h1 className="header-h1">Skins you need to unlock!</h1>
        <div className="header-container">
          <h3>Armor</h3>
          <h3>Backpieces</h3>
          <h3>Weapons</h3>
        </div>
      </header>
      <div className="left-sidebar all-bars">
        {mounted.current && displaySkins("Armor")}
      </div>
      <main className="results-main all-bars">
        {mounted.current && displaySkins("Back")}
      </main>
      <div className="right-sidebar all-bars">
        {mounted.current && displaySkins("Weapon")}
      </div>
    </div>
  );
};
