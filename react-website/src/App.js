import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // Redirect
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import './style.css';
import JoinUs from './joinUs';
import Sponsors from './sponsors';
// import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
// const { width, height } = Dimensions.get('window');

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/join-us">Join Us</Link>
            </li>
            <li>
              <Link to="/sponsors">Sponsors</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/join-us">
            <JoinUs />
          </Route>
          <Route path="/sponsors">
            <Sponsors />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}