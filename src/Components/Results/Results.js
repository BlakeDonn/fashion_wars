import "./Results.scss";
import { PreviewSkin } from "../PreviewSkin/PreviewSkin";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { getUserSkins, getAllSkins, getFilteredSkins } from "../../apiCalls";

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Armor: [],
      Weapon: [],
      Back: [],
      userList: [],
      SelectedCategories: props.match.params.results,
    };
  }
  componentDidMount = async () => {
    let neededSkins = await this.filterSkinsByType();
    this.setState({
      Armor: neededSkins.Armor,
      Weapon: neededSkins.Weapon,
      Back: neededSkins.Back,
    });
  };

  getNeededSkins = async () => {
    const userSkins = await getUserSkins();
    const allSkins = await getAllSkins();
    return allSkins.filter((skin) => {
      return !userSkins.includes(skin);
    });
  };

  filterSkinsByType = async () => {
    const allNeededSkins = await this.getNeededSkins();
    let counter = Math.floor(allNeededSkins.length / 100);
    let i = 1;
    let start = 0;
    let end = 200;
    let stateHolder = {
      Armor: [],
      Weapon: [],
      Back: [],
    };
    while (i < counter) {
      const joinedSkins = allNeededSkins.join(",").slice(start, end);
      const skinsForUser = await getFilteredSkins(joinedSkins);
      skinsForUser.forEach(async (skin) => {
        if (this.state.SelectedCategories.includes(skin.type) && skin.name) {
          return stateHolder[skin.type].push(skin);
        }
        return;
      });
      i++;
      start += 200;
      end += 200;
    }
    return stateHolder;
  };

  displaySkins = (skinType) => {
    if (this.state.SelectedCategories.includes(skinType)) {
      if (this.state[skinType].length) {
        return this.state[skinType].map((skin) => (
          <PreviewSkin
            details={skin}
            updateList={this.updateList}
          />
        ));
      }
      return <h3>Loading</h3>;
    }
  };

  updateList = (skin) => {
    this.setState({ userList: [...this.state.userList, skin] });
  };

  render() {
    return (
      <div className={this.props.match.isExact ? "results" : "results hidden"}>
        <header className="results-header">
          <div className="results-h1">
            <h1 className="header-h1 skin-type">Skins you need to unlock!</h1>
            <Link
              to={{
                pathname: "/results/todo/todo",
                todoSkins: this.state.userList,
              }}
              data-testid="todo-list-button"
              className="button"
            >
              View Todo List
            </Link>
          </div>
          <p className="explanation-text skin-type">
            Click on the icon below to be taken to the preview screen
          </p>
          <div className="header-container">
            <h3 className="skin-type">Armor</h3>
            <h3 className="skin-type">Backpieces</h3>
            <h3 className="skin-type">Weapons</h3>
          </div>
        </header>
        <div className="left-sidebar all-bars">
          {this.displaySkins("Armor")}
        </div>
        <main className="results-main all-bars">
          {this.displaySkins("Back")}
        </main>
        <div className="right-sidebar all-bars">
          {this.displaySkins("Weapon")}
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}
