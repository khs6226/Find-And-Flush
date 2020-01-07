import React, { useContext, useState } from "react";
import { Meteor } from "meteor/meteor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import WashroomContext from "../../api/WashroomContext";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DetailView from "../DetailView";

const WashroomItemList = ({ washroom }) => {
  const washroomContext = useContext(WashroomContext);
  const [open, setOpen] = useState(false);
  const showDetail = event => {
    event.preventDefault();
    setOpen(!open);
    washroomContext.SetSelected(washroom);
  };
  return (
    <Grid item xs={12}>
      <Paper style={{ padding: "10px 15px" }}>
        <Typography onClick={event => showDetail(event)}>
          {washroom.name}
        </Typography>
        <Typography style={{ display: "flex" }}>
          <LocationOnIcon />
          {washroom.address}
        </Typography>
        <Rating name="read-only" value={washroom.rate} readOnly />
        {open ? <DetailView /> : null}
      </Paper>
    </Grid>
  );
};
export default withStyles(styles)(WashroomItemList);
