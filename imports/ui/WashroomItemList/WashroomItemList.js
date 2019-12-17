import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


export default class WashroomItemList extends Component {
    showDetail() {
        Meteor.call('washroom.detail', this.props.washroom._id);
    }
    render() {
        return (
            <li onClick={this.showDetail.bind(this)}>{this.props.washroom.name}</li>
        );
    }
}