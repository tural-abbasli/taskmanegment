import React, { Component } from 'react';

import Header from './component/Header';
import Tasks from './component/Tasks';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Header />
        <Tasks />
      </div>
    );
  }
}

export default App;
