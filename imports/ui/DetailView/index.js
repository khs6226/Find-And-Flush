import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Washrooms } from '../../api/washrooms';
import WashroomItemList from '../WashroomItemList/WashroomItemList'

class DetailView extends Component {

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Detail</h1>
                </header>
                <ul id="detail">

                </ul>
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('washrooms');

    return {
        washrooms: Washrooms.find({}).fetch(),
    }
})(DetailView);

