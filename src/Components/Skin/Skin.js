import './Skin.css';
import {Link} from 'react-router-dom'

export const Skin = (props) => {
  return (
    <div className="Skin">
      <header className="skin-header">
        <h3>{props.details.name}</h3>
        <Link to={`${props.details.id}`}><img src={props.details.icon} alt={props.details.name} /></Link>
      </header>
    </div>
  );
}


