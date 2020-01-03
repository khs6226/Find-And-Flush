import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import WashroomContext from "../../api/WashroomContext";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const WashroomItemList = ({ washroom }) => {
  const [open, setOpen] = useState(false);
  // console.log(washroom.comments)
  const showDetail = event => {
    setOpen(!open);
  };
  // let { classes } = this.props;
  return (
    <Grid item xs={12}>
      <Paper
        onClick={event => showDetail(event)}
        style={{ padding: "10px 15px" }}
      >
        <Typography>{washroom.name}</Typography>
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
