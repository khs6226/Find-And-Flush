import React, { Component } from 'react';

export default class WashroomItemList extends Component {
    render() {
        return (
            <li>{this.props.washroom.name}</li>
        );
    }
}