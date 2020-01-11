import React, { useState } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Washrooms } from "./washrooms";
import WashroomContext from "./WashroomContext";

const WashroomProvider = ({ washrooms, children }) => {
  const [Selected, SetSelected] = useState();
  const [activeMarker, SetActiveMarker] = useState({});
  const [showingInfoWindow, SetshowingInfoWindow] = useState({});
  return (
    <WashroomContext.Provider
      value={{
        washrooms: washrooms,
        Selected: Selected,
        SetSelected: SetSelected,
        activeMarker: activeMarker,
        SetActiveMarker: SetActiveMarker,
        showingInfoWindow: showingInfoWindow,
        SetshowingInfoWindow: SetshowingInfoWindow
      }}
    >
      {children}
    </WashroomContext.Provider>
  );
};

export default withTracker(() => {
  Meteor.subscribe("washrooms");

  return {
    washrooms: Washrooms.find({}).fetch(),
    filterSoap: Washrooms.find({ soap: true }).fetch()
  };
})(WashroomProvider);
