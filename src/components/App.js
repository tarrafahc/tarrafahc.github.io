import React, { Component } from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import AboutHack from "./AboutHack";
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
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/aboutHack" component={AboutHack} />
            <Route path="/calendar" component={Calendar} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
