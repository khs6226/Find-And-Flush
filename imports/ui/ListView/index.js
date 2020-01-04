import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Washrooms } from "../../api/washrooms";
import WashroomContext from "../../api/WashroomContext";
import WashroomItemList from "../WashroomItemList/WashroomItemList";
import Review from "../ReviewButton/Review";

// const handleChange = event => {
//     setFilter(event.target.value);
// };

const ListView = () => {
  const renderWashrooms = () => {
    return washrooms.map((washroom, i) => (
      <WashroomItemList key={i} washroom={washroom} />
    ));
  };
  const filter = () => {
    console.log("filter");
  };
  return (
    <div className="listViewContainer">
      <header>
        <Typography variant="h4" component="h1">
          Washroom List
        </Typography>
      </header>
      <Review filter={filter} review={false} />

      <Grid container spacing={2}>
        {renderWashrooms()}
      </Grid>
    </div>
  );
};

export default ListView;
