import React, { Component } from 'react';
import './App.css';

import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: ''
    }
  }

  onRouteChange = route => {
    console.log(this.state.route) // 1
    // No Code Splitting
    // this.setState({route: route});
    // With Code Splitting - Dynamic Import
    if (route === 'page1') {
      this.setState({ route: route })
    } else if (route === 'page2') {
      import('./components/Page2').then((Page2) => {
        this.setState({ route: route, component: Page2.default })
      }) // asynchronous => returns promise
    }  else if (route === 'page3') {
      import('./components/Page3').then((Page3) => {
        this.setState({ route: route, component: Page3.default })
      }) // asynchronous => returns promise
    }
  }

  render() {
  //   if (this.state.route === 'page1') {
  //     return (
  //       <div className="App">
  //         <header className="App-header">
  //           <div>
  //             <Page1 onRouteChange={this.onRouteChange}/>
  //           </div>
  //         </header>
  //       </div>
  //     );
  //   } else if (this.state.route === 'page2') {
  //     return (
  //       <div className="App">
  //         <header className="App-header">
  //           <div>
  //             <Page2 onRouteChange={this.onRouteChange}/>
  //           </div>
  //         </header>
  //       </div>
  //     );
  //   } else if (this.state.route === 'page3') {
  //     return (
  //       <div className="App">
  //         <header className="App-header">
  //           <div>
  //             <Page3 onRouteChange={this.onRouteChange}/>
  //           </div>
  //         </header>
  //       </div>
  //     );
  //   }
  // };

  // Code Splitting Implementation
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else { // 2
      return <this.state.component onRouteChange={this.onRouteChange} />
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

This code splitting will be achieved by using dynamic imports. Only import components as they are needed. When you click the button the page component and all its styling will be imported. This is only needed once because should you navigate to the same page again within the same session the styles and component do not need to be served again. 

// 2
Where does state.component come from? 
this is a state we create called component 
*/
