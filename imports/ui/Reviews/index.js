import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Washrooms } from "../../api/washrooms";
import { Meteor } from "meteor/meteor";

const Reviews = () => {
  return <div id="reviewContainer"></div>;
};

export default withTracker(() => {
  Meteor.subscribe("washrooms");

  return {
    washrooms: Washrooms.find({}).fetch()
  };
})(Reviews);
