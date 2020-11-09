import "./Skin.css";
import {Link} from "react-router-dom";

export const Skin = (props) => {
  return (
    <div className="Skin">
      <header className="skin-header">
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
