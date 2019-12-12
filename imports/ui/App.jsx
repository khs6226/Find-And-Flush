import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import Washroom from './washroomInfo.jsx';

const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
    <Washroom />
  </div>
);

export default App;