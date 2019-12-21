import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class WashroomItemList extends Component {

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
        return (
            <div className={classes.listContainer}>
                <a><li className={classes.listItem} onClick={this.showDetail.bind(this)}>{this.props.washroom.name}</li></a>
            </ div >
        );
    }
}

export default withStyles(styles)(WashroomItemList);

