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
import WashroomItemList from "../WashroomItemList/WashroomItemList";
import ReviewForm from "../ReviewForm";

// const handleChange = event => {
//     setFilter(event.target.value);
// };

class ListView extends Component {
    // if(value = this)
    renderWashrooms() {
        return this.props.washrooms.map(washroom => (
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
                {/* <FormControl className='formControl'>
                    <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    // value={filter}
                    // onChange={handleChange}
                    >
                        <MenuItem value={1}>Rate</MenuItem>
                        <MenuItem value={2}>Toilet paper</MenuItem>
                        <MenuItem value={3}>Baby Friendly</MenuItem>
                        <MenuItem value={4}>Paper Towels</MenuItem>
                        <MenuItem value={5}>Soap</MenuItem>


                    </Select>
                </FormControl> */}

                <ul>{this.renderWashrooms()}</ul>
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe("washrooms");

    return {
        washrooms: Washrooms.find({}).fetch()
    };
})(ListView);
