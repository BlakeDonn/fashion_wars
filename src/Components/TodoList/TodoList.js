import "./TodoList.scss";
import {Link} from "react-router-dom";
export const TodoList = (props) => {
  const distributeSkins = () => {
    return props.location.todoSkins.map((skin) => {
      return (
        <div className="skin-container">
          <div>
            <h3>{skin.name}</h3>
            <p>{skin.type}</p>
            <img
              src={skin.icon}
              alt={skin.name}
              className={"icon"}
            />
          </div>
        </div>
      );
    });
  };
  return <div className="todo-list">
    <button
      onClick={() => props.history.goBack()}
      data-testid="view-todo-test"
      className="button"
    >
      Back To Results
        </button>
    {distributeSkins()}
  </div>;
};
