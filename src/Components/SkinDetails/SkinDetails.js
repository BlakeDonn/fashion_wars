import "./SkinDetails.scss";
import {getImage} from '../../apiCalls'
import React, {useState, useEffect, useRef} from "react";

export const SkinDetails = (props) => {
  console.log(props.history.location.skinDetails)
  let skinSpecs = props.history.location.skinDetails
  const mounted = useRef()
  const [skinDetails, setSkinDetails] = useState()
  useEffect(() => {
    if (!mounted.current) {
      const setDetails = async () => {
        let imageSrc = await getImage(skinSpecs.name)
        setSkinDetails({imageSrc})
      }
      setDetails()
      mounted.current = true;
    }
  });
  const displaySrc = () => {
    return <img className={"sidebar"} src={skinDetails.imageSrc} alt={skinSpecs.name} />
  }
  return (
    <div className="skin-details">
      <div className="content">
        <h1>{skinSpecs.name}</h1>
        <p>Type: {skinSpecs.details.type}</p>
        <p>Weight Class: {skinSpecs.details.weight_class}</p>
        <p>Rarity: {skinSpecs.rarity}</p>
        <a href={`https://wiki.guildwars2.com/wiki/${skinSpecs.name}`}><img src={skinSpecs.icon} alt={skinSpecs.name} /></a>
        <a href={`https://wiki.guildwars2.com/wiki/${skinSpecs.name}`}>More info</a>
      </div>
      {mounted.current && displaySrc()}
    </div>
  );
};
