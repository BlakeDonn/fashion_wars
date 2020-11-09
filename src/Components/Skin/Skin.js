import './Skin.css';

export const Skin = (props) => {
  console.log(props)
  return (
    <div className="Skin">
      <header className="skin-header">
        <img src={props.details.icon} alt={props.details.name} />
      </header>
    </div>
  );
}


