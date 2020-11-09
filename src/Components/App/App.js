import "./App.css";
import {Homepage} from "../Homepage/Homepage";
import {Results} from "../Results/Results";
import {SkinDetails} from "../SkinDetails/SkinDetails";
import {Route} from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <header className="">
        <Route exact path="/"><Homepage /></Route>
        <Route exact path="/results/skins/:id" component={SkinDetails} />
        <Route path="/results/:results" component={Results} />
      </header>
    </div >
  );
};
