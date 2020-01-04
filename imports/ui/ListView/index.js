import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React, { Component } from "react";
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

    static contextType = WashroomContext;
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


        return (
            <div className='listViewContainer'>
                <header>
                    <h1>Find a washroom</h1>
                </header>
                <ReviewForm filter={handleFilter} />

                <ul>{this.renderWashrooms()}</ul>
            </div>
        );
    }
}

export default ListView;

