import React from 'react';
import logo from '../logo.svg';

const Page1 = ({ onRouteChange }) => {
    return (
        <div className="App">
            <header className="App-header">
              <div>
                <header>-----------------------------------</header>
                <h3>Page 1</h3>
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
                      Learn React 1
                    </a>
                    <div>
                        <button className="disabled">Page 1</button>
                        <button onClick={() => onRouteChange('page2')}>Page 2</button>
                        <button onClick={() => onRouteChange('page3')}>Page 3</button>
                    </div>
                <footer>-----------------------------------</footer>
              </div>
            </header>
      </div>
    );
};

export default Page1;