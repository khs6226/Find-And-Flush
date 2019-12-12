import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Washrooms }  from '../api/washrooms';

class Washroom extends Component {
  render() {
    console.log(this.props);
    const washrooms = this.props.washrooms.map(
      washroom => this.makeLink(washroom)
    );

    return (
      <div>
        <h2>Washrooms!</h2>
        <ul>{ washrooms }</ul>
      </div>
    );
  }

  makeLink(washroom) {
    return (
      <li key={washroom._id}>
        <a href="" target="_blank">{washroom.name}</a>
      </li>
    );
  }
}

export default WashroomContainer = withTracker(() => {
  return {
    washrooms: Washrooms.find().fetch(),
  };
})(Washroom);
