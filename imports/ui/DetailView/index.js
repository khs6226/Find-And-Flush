import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React, { useContext } from "react";
import { withTracker } from "meteor/react-meteor-data";
import ReactDOM from "react-dom";
import { Washrooms } from "../../api/washrooms";
import WashroomItemList from "../WashroomItemList/WashroomItemList";
import Review from "../ReviewButton/Review";
import Button from "@material-ui/core/Button";
import WashroomContext from "../../api/WashroomContext"

const DetailView = () => {
  const washroomContext = useContext(WashroomContext);
  const {
    toiletPaper,
    babyFriendly,
    soap,
    dryer,
    paperTowel
  } = washroomContext.Selected;
  /*     const showReview = () => {
      console.log(this.props.washrooms);
      Meteor.call('washroom.review', this.props.washroom._id);
    }; */
  return (
    <div className="container">
      <ul id="detail">
        <li>Toilet paper: {toiletPaper ? "yes" : "no"}</li>
        <li>Baby friendly: {babyFriendly ? "yes" : "no"}</li>
        <li>Soap: {soap ? "yes" : "no"}</li>
        <li>Dryer: {dryer ? "yes" : "no"}</li>
        <li>Paper towel: {paperTowel ? "yes" : "no"}</li>
      </ul>

      <Review review={true} />
    </div>
  );
};

export default DetailView;
