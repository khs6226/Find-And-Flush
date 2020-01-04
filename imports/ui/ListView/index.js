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
import ReviewForm from "../ReviewForm";

// const handleChange = event => {
//     setFilter(event.target.value);
// };

class ListView extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         filteredList = '',
    //     };
    // }

 
    renderWashrooms() {
        return this.context.map(washroom => (
            <WashroomItemList key={washroom._id} washroom={washroom} />
        ));
    }

    // renderFilteredWashrooms() {

    // }



    render() {
        let { classes } = this.props;
        // console.log('props', this.props.washrooms)

        const handleFilter = (washroom) => {

            console.log('filter', this.renderWashrooms());


        }
    }
=======
  static contextType = WashroomContext;
  componentDidMount = () => {
    // console.log(this.context)
  };
  renderWashrooms() {
    return this.context.map((washroom, i) => (
      <WashroomItemList key={i} washroom={washroom} />
    ));
  }

  render() {
    let { classes } = this.props;
    console.log("props", this.props.washrooms);
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
        {/* <ReviewForm filter={filter} /> */}

        <Grid container spacing={2}>
          {this.renderWashrooms()}
        </Grid>
      </div>
    );
  }

}

export default ListView;
