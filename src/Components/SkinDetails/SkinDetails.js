import "./SkinDetails.scss";
import React, {Component} from "react";
import {getImage} from "../../apiCalls";
import {Redirect, Link} from 'react-router-dom'

export class SkinDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: props.location.userList,
      skinSpecs: props.location.skinDetails,
      url: "",
    };
  }
  componentDidMount = async () => {
    if (!this.state.skinSpecs) {
      return (<Redirect to='/' />)
    }
    let imageUrl = await getImage(this.state.skinSpecs.name);
    this.setState({url: imageUrl});
  };
  determineImageDetails = () => {
    if (!this.state.url.length) {
      return;
    }
    if (this.state.url.includes("wiki")) {
      return `${this.state.skinSpecs.name} set preview`;
    }
    if (this.state.url.includes("imgur")) {
      return "No image found, please check wiki link for more info";
    }
  };

  determineSkinType = () => {
    if (this.state.skinSpecs.type === "Armor") {
      return (
        <div>
          <p>Type: {this.state.skinSpecs.type}</p>
          <p>Weight Class: {this.state.skinSpecs.details.weight_class}</p>
          <p>Armor Type: {this.state.skinSpecs.details.type}</p>
          <p>Rarity: {this.state.skinSpecs.rarity}</p>
        </div>
      );
    }
    if (this.state.skinSpecs.type === "Weapon") {
      return (
        <div>
          <p>Type: {this.state.skinSpecs.type}</p>
          <p>Damage Type: {this.state.skinSpecs.details.damage_type}</p>
          <p>Weapon Type: {this.state.skinSpecs.details.type}</p>
          <p>Rarity: {this.state.skinSpecs.rarity}</p>
        </div>
      );
    }
    return (
      <div>
        <p>Type: {this.state.skinSpecs.type}</p>
        <p>Rarity: {this.state.skinSpecs.rarity}</p>
      </div>
    );
  };
  render() {
    if (!this.state.skinSpecs) {
      return (<Redirect to='/' />)
    }
    return (
      <div className="skin-details">
        <div className="content">
          <h3>{this.state.skinSpecs.name}</h3>
          {this.determineSkinType()}
          <div className="bottom-buttons">
            <a
              data-testid={"wiki-icon"}
              href={`https://wiki.guildwars2.com/wiki/${this.state.skinSpecs.name}`}
            >
              <img
                src={this.state.skinSpecs.icon}
                alt={this.state.skinSpecs.name}
                className={"icon"}
              />
            </a>
            <p className={"icon-text"}>More info</p>
            <p
              onClick={() =>
                this.props.location.updateList(this.state.skinSpecs)
              }
            >
              <img
                data-testid={"todo-icon"}
                src={"https://i.imgur.com/YhTbWKz.png"}
                className={"todo"}
                alt={"todo-icon"}
              />
            </p>
            <p className={"todo-text"}>Add to list</p>
          </div>
        </div>
        {this.state.url && (
          <img
            className={"sidebar"}
            src={this.state.url}
            data-testid={"preview-test"}
            alt={this.determineImageDetails()}
          />
        )}
        <Link
          to={{
            pathname: "/results/todo/todo",
            todoSkins: [...this.props.location.userList, this.state.skinSpecs]
          }}
          className="button"
        >
          View Todo List
            </Link>
      </div>

    );
  }
}
