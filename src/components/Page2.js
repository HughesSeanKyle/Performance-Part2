import React from 'react';
import logo from '../logo.svg';

const Page2 = ({ onRouteChange }) => {
    return (
        <div>
            <header>-----------------------------------</header>
            <h3>Page 2</h3>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React 2
            </a>
            <div>
                <button onClick={() => onRouteChange('page1')}>Page 1</button>
                <button className="disabled">Page 2</button>
                <button onClick={() => onRouteChange('page3')}>Page 3</button>
            </div>
            <footer>-----------------------------------</footer>
        </div>
    );
};

export default Page2;