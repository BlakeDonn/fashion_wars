import "./SkinDetails.scss";
import React, {Component} from "react";
import {getImage} from "../../apiCalls";

export class SkinDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skinSpecs: props.location.skinDetails,
      url: ""
    };
  }
  componentDidMount = async () => {
    let imageUrl = await getImage(this.state.skinSpecs.name)
    this.setState({url: imageUrl})
  }
  render() {
    return (
      <div className="skin-details">
        <div className="content">
          <h1>{this.state.skinSpecs.name}</h1>
          <p>Type: {this.state.skinSpecs.type}</p>
          <p>Weight Class: {this.state.skinSpecs.detials && this.state.skinSpecs.details.weight_class}</p>
          <p>Rarity: {this.state.skinSpecs.rarity}</p>
          <a href={`https://wiki.guildwars2.com/wiki/${this.state.skinSpecs.name}`}><img src={this.state.skinSpecs.icon} alt={this.state.skinSpecs.name} /></a>
          <a href={`https://wiki.guildwars2.com/wiki/${this.state.skinSpecs.name}`}>More info</a>
        </div>
        <img className={"sidebar"} src={this.state.url} alt={this.state.skinSpecs.name} />
      </div>
    );
  }
};
