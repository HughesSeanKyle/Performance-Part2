import React, { Component } from 'react';
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
    console.log(this.state.route) // 1
    this.setState({route: route});
  }

  render() {
    if (this.state.route === 'page1') {
      return (
        <div className="App">
          <header className="App-header">
            <div>
              <Page1 onRouteChange={this.onRouteChange}/>
            </div>
          </header>
        </div>
      );
    } else if (this.state.route === 'page2') {
      return (
        <div className="App">
          <header className="App-header">
            <div>
              <Page2 onRouteChange={this.onRouteChange}/>
            </div>
          </header>
        </div>
      );
    } else if (this.state.route === 'page3') {
      return (
        <div className="App">
          <header className="App-header">
            <div>
              <Page3 onRouteChange={this.onRouteChange}/>
            </div>
          </header>
        </div>
      );
    }
  };
};

export default App;

/*
// 1
Shows old state onClick and renders new page
onClick page2 => state : page1 => renders page2
onClick page3 => state : page2 => renders page3 

Only once you leave the page does state update to the page you have clicked on. 

Note for Vid 126
The point of this app is to not render everthing when the app starts up but the render the other pages only when the onClick event handler is triggered. 

This makes initial loading of the entire app a little bit quicker as only the bare minimum on loading the app is needed. 
*/
