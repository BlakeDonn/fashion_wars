import "./Results.scss";
import React, {useState, useEffect} from "react";
import {getUserSkins, getAllSkins} from "../../apiCalls";

export const Results = () => {
  const [neededSkins, setNeeededSkins] = useState({
    armor: [],
    weapons: [],
    dyes: [],
  })
  const getNeededSkins = async () => {
    const res = await getUserSkins()
    console.log(res)
  }
  useEffect(() => {
    getNeededSkins()
  }, [])

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
