import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Smurfs from "./components/pages/Home";
import SmurfForm from "./components/pages/AddSmurf";
import SmurfUpdate from "./components/pages/changeSmurf";
import Nav from "./components/nav/nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <Route path="/login" component={Login} />
      <Route exact path="/Home" component={Smurfs} key={Date.now()} />
      <Route exact path="/form" component={SmurfForm} key={Date.now()} />
      <Route exact path="/update" component={SmurfUpdate} key={Date.now()} />
    </Router>
  );
}

export default App;
