import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1'
    }
  }

  onRouteChange = route => {
    this.setState({route: route});
    console.log(this.state.route)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Page1 onRouteChange={this.onRouteChange}/>
            <Page2 onRouteChange={this.onRouteChange}/>
            <Page3 onRouteChange={this.onRouteChange}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
