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
        if (props.match.params.results.includes(skin.type)) {
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
  useEffect(() => {
    console.log(props.match.params);
    const getSkins = async () => {
      let userSkins = await filterSkinsByType()
      setNeeededSkins({userSkins})
    }
    getSkins()
  }, []);

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
