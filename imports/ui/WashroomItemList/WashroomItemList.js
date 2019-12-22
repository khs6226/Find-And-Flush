import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import WashroomContext from "../../api/WashroomContext";

   
class WashroomItemList extends Component {
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
    let { classes } = this.props;
    console.log(this.context);
    return (
       <div className={classes.listContainer}>
        <li className={classes.listItem} onClick={this.showDetail.bind(this)}>{this.props.washroom.name}</li>
        </ div >
    );
  }

}

export default withStyles(styles)(WashroomItemList);

