import "./SkinsDetails.scss";
import {getImage} from '../../apiCalls'
import React, {useState, useEffect, useRef} from "react";

export const SkinDetails = (props) => {
  console.log(props.history.location.skinDetails)
  const mounted = useRef()
  const [skinDetails, setSkinDetails] = useState()
  useEffect(() => {
    if (!mounted.current) {
      const setDetails = async () => {
        let imageSrc = await getImage(props.history.location.skinDetails.name)
        setSkinDetails({imageSrc})
      }
      setDetails()
      mounted.current = true;
    }
  });
  const displaySrc = () => {
    console.log(skinDetails)
    return <img src={skinDetails.imageSrc} alt={props.history.location.skinDetails.name} />
  }
  return (
    <div className="preview-skin">
      <header className="preview-skin-header">
        <h3>{props.history.location.skinDetails.name}</h3>
        {mounted.current && displaySrc()}
      </header>
    </div>
  );
};
