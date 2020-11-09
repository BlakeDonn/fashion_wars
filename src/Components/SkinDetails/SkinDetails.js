import "./SkinDetails.scss";
import React from "react";

export const SkinDetails = (props) => {
  let skinSpecs = props.location.skinDetails
  return (
    <div className="skin-details">
      <div className="content">
        <h1>{skinSpecs.name}</h1>
        <p>Type: {skinSpecs.type}</p>
        <p>Weight Class: {skinSpecs.detials && skinSpecs.details.weight_class}</p>
        <p>Rarity: {skinSpecs.rarity}</p>
        <a href={`https://wiki.guildwars2.com/wiki/${skinSpecs.name}`}><img src={skinSpecs.icon} alt={skinSpecs.name} /></a>
        <a href={`https://wiki.guildwars2.com/wiki/${skinSpecs.name}`}>More info</a>
      </div>
      <img className={"sidebar"} src={skinSpecs.url && skinSpecs.url} alt={skinSpecs.name} />
    </div>
  );
};
