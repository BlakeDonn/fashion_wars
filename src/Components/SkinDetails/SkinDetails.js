import "./SkinDetails.scss";
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
    return <img className={"sidebar"} src={skinDetails.imageSrc} alt={props.history.location.skinDetails.name} />
  }
  return (
    <div className="skin-details">
      <div className="content"></div>
      {mounted.current && displaySrc()}
      <div className="icon"></div>
    </div>
  );
};
