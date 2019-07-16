import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Calendar from "./Calendar";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/calendar" component={Calendar} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
