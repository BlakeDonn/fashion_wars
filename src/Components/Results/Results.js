import "./Results.scss";
import React, {useState, useEffect} from "react";
import {getUserSkins, getAllSkins} from "../../apiCalls";

export const Results = (props) => {
  const [neededSkins, setNeeededSkins] = useState({
    armor: [],
    weapons: [],
    dyes: [],
  })
  const getNeededSkins = async () => {
    const userSkins = await getUserSkins()
    const allSkins = await getAllSkins()
    let filteredSkins = allSkins.filter(skin => {
      return !userSkins.includes(skin)
    })
    console.log(filteredSkins)
    //const joined = res.join(',')
    //filterSkinsByType(joined.slice(0, 100))
  }
  const filterSkinsByType = async (skins) => {
    //const res = await getAllSkins(skins)
    //console.log(res)
  }
  useEffect(() => {
    console.log(props.match.params)
    getNeededSkins()

  })

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
