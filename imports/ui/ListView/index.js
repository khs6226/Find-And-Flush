import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";



import { Washrooms } from "../../api/washrooms";
import WashroomContext from "../../api/WashroomContext";
import WashroomItemList from "../WashroomItemList/WashroomItemList";
import ReviewForm from "../ReviewForm";

// const handleChange = event => {
//     setFilter(event.target.value);
// };

class ListView extends Component {

  static contextType = WashroomContext;
  renderWashrooms() {
    return this.context.map(washroom => (
      <WashroomItemList key={washroom._id} washroom={washroom} />
    ));
  }

  render() {
     let { classes } = this.props;
        console.log('props', this.props.washrooms)

        const filter = () => {
            console.log("filter")
        }
    return (
      <div className="listViewContainer">
        <header>
          <h1>Washroom List</h1>
        </header>
      <ReviewForm filter={filter} />

        <ul>{this.renderWashrooms()}</ul>
      </div>
    );
  }
}

export default ListView;

