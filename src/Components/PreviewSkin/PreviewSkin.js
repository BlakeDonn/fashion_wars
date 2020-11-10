import "./PreviewSkin.scss";
import {Link} from "react-router-dom";
export const PreviewSkin = (props) => {
  return (
    <div className="preview-skin">
      <Link
        to={{
          pathname: `/results/skins/${props.details.id}`,
          skinDetails: props.details,
          updateList: props.updateList,
          userList: props.userList
        }}
      >
        <img
          src={props.details.icon}
          alt={props.details.name}
          className="preview-skin"
        />
      </Link>
    </div>
  );
};
