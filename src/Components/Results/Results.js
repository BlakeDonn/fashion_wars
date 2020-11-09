import "./Results.scss";
import {PreviewSkin} from "../PreviewSkin/PreviewSkin";
import React, {Component} from "react";
import {getUserSkins, getAllSkins, getFilteredSkins, getImage} from "../../apiCalls";

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Armor: [],
      Weapon: [],
      Back: [],
      SelectedCategories: props.match.params.results
    };
  }
  componentDidMount = async () => {
    let neededSkins = await this.filterSkinsByType()
    this.setState({
      Armor: neededSkins.Armor,
      Weapon: neededSkins.Weapon,
      Back: neededSkins.Back,
    })
  }

  getNeededSkins = async () => {
    const userSkins = await getUserSkins();
    const allSkins = await getAllSkins();
    return allSkins.filter((skin) => {
      return !userSkins.includes(skin);
    });
  };

  filterSkinsByType = async (skins) => {
    const allNeededSkins = await this.getNeededSkins();
    let counter = Math.floor(allNeededSkins.length / 100);
    let i = 1;
    let start = 0;
    let end = 200;
    let stateHolder = {
      Armor: [],
      Weapon: [],
      Back: [],
    }
    while (i < counter) {
      const joinedSkins = allNeededSkins.join(",").slice(start, end);
      const skinsForUser = await getFilteredSkins(joinedSkins);
      skinsForUser.forEach(async (skin) => {
        if (this.state.SelectedCategories.includes(skin.type) && skin.name) {
          skin.url = await getImage(skin.name)
          return stateHolder[skin.type].push(skin)
        }
        return
      })
      i++
      start += 200
      end += 200
    }
    return stateHolder
  }

  displaySkins = (skinType) => {
    if (this.state.SelectedCategories.includes(skinType)) {
      if (this.state[skinType].length) {
        return this.state[skinType].map(skin => <PreviewSkin details={skin} />)
      }
      return <h3>Loading</h3>
    }
  }

  render() {
    return (
      <div className="results">
        <header className="results-header">
          <h1 className="header-h1">Skins you need to unlock!</h1>
          <div className="header-container">
            <h3>Armor</h3>
            <h3>Backpieces</h3>
            <h3>Weapons</h3>
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
};
