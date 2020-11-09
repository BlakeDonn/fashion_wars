import "./PreviewSkin.scss";
import {Link} from "react-router-dom";
export const PreviewSkin = (props) => {
  return (
    <div className="preview-skin">
      <Link
        to={{pathname: `/skin/${props.details.id}`, skinDetails: props.details}}
      >
        <img src={props.details.icon} alt={props.details.name} />
      </Link>
    </div >
  );
};
