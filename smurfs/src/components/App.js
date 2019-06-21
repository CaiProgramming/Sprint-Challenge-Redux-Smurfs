import React, { Component } from "react";
import "./App.css";
import Smurf from "./smurfs/SmurfCard";
import styled from "styled-components";
import { connect } from "react-redux";
import { makeSmurfs, removeSmurfs } from "../actions";
import Spinner from "./spinner.gif";
class App extends Component {
  cbRemoveSmurf = id => {
    this.props.removeSmurfs(id);
    this.props.makeSmurfs();
  };
  componentDidMount = () => {
    this.props.makeSmurfs();
  };
  getRandomInt = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  smurfHandler = () => {
    if (this.props.SMURF) {
      return this.props.SMURF.map(smurf => {
        let date = Date.now();
        return (
          <Smurf
            key={date + this.getRandomInt(1000, 25000)}
            id={smurf.id}
            smurf={smurf.name}
            age={smurf.age}
            height={smurf.height}
            cb={this.cbRemoveSmurf}
          />
        );
      });
    }
  };
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Have fun!</div>
        {this.smurfHandler()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    SMURF: state.SMURF,
    isloadingGET: state.isloadingGET,
    successGET: state.successGET,
    isloadingPOST: state.isloadingPOST,
    successPUT: state.successPUT,
    isloadingDELETE: state.isloadingDELETE,
    successDELTE: state.successDELTE
  };
};

export default connect(
  mapStateToProps,
  { makeSmurfs, removeSmurfs }
)(App);
