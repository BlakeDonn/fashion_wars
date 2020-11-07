import "./App.css";
import {Homepage} from "../Homepage/Homepage";
import {Results} from "../Results/Results";
import {Route} from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <header className="">
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/results/:results" component={Results} />
      </header>
    </div >
  );
};
