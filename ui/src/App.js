import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Tearma from "./screens/tearma/tearma";
import PageNotFound from "./screens/common/pageNotFound";

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Tearma}/>
            <Route component={PageNotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
