import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import WashroomContext from "../../api/WashroomContext";

export default class WashroomItemList extends Component {
  static contextType = WashroomContext;
  showDetail() {
    Meteor.call("detail", this.props.washroom._id, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    });
  }
  render() {
    console.log(this.context);
    return (
      <li onClick={this.showDetail.bind(this)}>{this.props.washroom.name}</li>
    );
  }
}
