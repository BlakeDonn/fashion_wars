import "./PreviewSkin.scss";
import {Link} from "react-router-dom";

export const PreviewSkin = (props) => {
  return (
    <div className="preview-skin">
      <header className="preview-skin-header">
        <h3>{props.details.name}</h3>
        <Link
          to={{pathname: `${props.details.id}`, skinDetails: props.details}}
        >
          <img src={props.details.icon} alt={props.details.name} />
        </Link>
      </header>
    </div>
  );
};
