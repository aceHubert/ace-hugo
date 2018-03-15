import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./pages";
import Input from "./pages/input";
import Button from "./pages/button";
import NoMatch from "./pages/notfound";

class App extends Component {
  render() {
    return (      
      <div className="app-dom">
        <section className="app-dom__left">
          <nav>
            <ul className="nav-bar">
              <li className="nav-bar__item"><Link to="/input">Input</Link></li>
              <li  className="nav-bar__item"><Link to="/button">Button</Link></li>
            </ul>
          </nav>
        </section>
        <section className="app-dom__right">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/input" component={Input}/>
                <Route path="/button" component={Button}/>
                <Route component={NoMatch}/>
            </Switch>
        </section>
      </div>
    );
  }
}

export default App;
