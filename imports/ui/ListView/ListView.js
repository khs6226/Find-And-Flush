import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Washrooms }  from '../../api/washrooms';
import WashroomItemList from '../WashroomItemList/WashroomItemList'


class ListView extends Component {


    renderWashrooms() {
        console.log(this.props);
        return this.props.washrooms.map((washroom) => (
            <WashroomItemList key={washroom._id} washroom={washroom} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Washroom List</h1>
                </header>

                <ul>
                    {this.renderWashrooms()}
                </ul>
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('washrooms');
  
    return {
        washrooms: Washrooms.find({}).fetch(),
    }})(ListView);

