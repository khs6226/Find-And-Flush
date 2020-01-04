import React, { useState } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Washrooms } from "./washrooms";
import WashroomContext from "./WashroomContext";

const WashroomProvider = ({ washrooms, children }) => {
  // const [Selected, SetSelected] = useState()
  return (
    <WashroomContext.Provider value={washrooms}>
      {children}
    </WashroomContext.Provider>
  );
};

export default withTracker(() => {
  Meteor.subscribe("washrooms");

  return {
    washrooms: Washrooms.find({}).fetch(),
    filterSoap: Washrooms.find({ soap: true }).fetch(),
  };
})(WashroomProvider);
