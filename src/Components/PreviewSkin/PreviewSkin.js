import "./PreviewSkin.scss";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
export const PreviewSkin = (props) => {
  return (
    <div className="preview-skin">
      <Link
        to={{
          pathname: `/results/skins/${props.details.id}`,
          skinDetails: props.details,
          updateList: props.updateList,
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

PreviewSkin.propTypes = {
  details: PropTypes.object.isRequired,
  updateList: PropTypes.func.isRequired
}
