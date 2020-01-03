import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import ReactDOM from "react-dom";
import { Washrooms } from "../../api/washrooms";
import WashroomItemList from "../WashroomItemList/WashroomItemList";
import Review from "./Review";
import Button from "@material-ui/core/Button";

class DetailView extends Component {
  render() {
    /*     const showReview = () => {
      console.log(this.props.washrooms);
      Meteor.call('washroom.review', this.props.washroom._id);
    }; */
    return (
      <div className="container">
        <header>
          <h1>Detail</h1>
        </header>
        <ul id="detail" />
        {/*         <Button variant="contained" color="primary" onClick={showReview}>
          show reviews
        </Button> */}
        <Review />
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("washrooms");

  return {
    washrooms: Washrooms.find({}).fetch()
  };
})(DetailView);
