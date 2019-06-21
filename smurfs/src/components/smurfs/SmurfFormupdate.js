import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { makeSmurfs, editSmurfs } from "../../actions";
import Spinner from "../spinner.gif";
const Container = styled.div`
  margin: auto;
  display: flex;
  flex-flow: wrap;
  width: 1250px;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  margin: 10px;
  border: none;
  border-bottom: 2px black solid;
  &:focus {
    outline: none;
  }
`;
const Card = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 100px;
  width: 500px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  @media (max-width: 1300px) {
    margin: 10px 0px;
  }
`;
const Btn = styled.button`
  margin: 10px;
  border-radius: 10px;
  border-style: solid;
  cursor: pointer;
`;
class SmurfForm extends React.Component {
  state = {
    Smurf: {
      name: "",
      age: "",
      height: "",
      id: ""
    }
  };
  textHandler = e => {
    e.persist();
    this.setState(prevState => ({
      Smurf: {
        ...prevState.Smurf,
        [e.target.id]: e.target.value
      }
    }));
  };

  componentDidMount = () => {
    this.props.makeSmurfs();
  };
  optionsHandler = () => {
    if (this.props.SMURFS) {
      return this.props.SMURFS.map(Smurf => {
        return (
          <option id={Smurf.id} value={Smurf.id}>
            {Smurf.name}
          </option>
        );
      });
    }
  };
  handleChange = event => {
    let Smurf = this.props.SMURFS.filter(
      Smurf => Smurf.id == event.target.value
    );
    if (Smurf[0]) {
      this.setState({
        Smurf: {
          name: Smurf[0].name,
          age: Smurf[0].age,
          height: Smurf[0].height,
          id: Smurf[0].id
        }
      });
    }
  };
  submitHandler = () => {
    this.props.editSmurfs(this.state.Smurf);
  };

  render() {
    if (this.props.successPUT) {
      this.props.history.push("/home");
    }
    if (this.props.isloadingGET) {
      return (
        <Container>
          <img src={Spinner} />
        </Container>
      );
    }
    return (
      <Card>
        <h2>Update your Smurfs</h2>
        <div>
          <select onChange={this.handleChange}>
            <option />
            {this.optionsHandler()}
          </select>
        </div>
        <div>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            value={this.state.Smurf.name}
            onChange={this.textHandler}
          />
        </div>
        <div>
          <Input
            type="text"
            id="age"
            placeholder="Age"
            value={this.state.Smurf.age}
            onChange={this.textHandler}
          />
        </div>
        <div>
          <Input
            type="text"
            id="height"
            placeholder="height"
            value={this.state.Smurf.height}
            onChange={this.textHandler}
          />
        </div>
        <Btn onClick={this.submitHandler}>Submit Smurf</Btn>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.SMURFS);
  return {
    SMURFS: state.SMURF,
    isloadingGET: state.isloadingGET,
    successGET: state.successGET,
    isloadingPOST: state.isloadingPOST,
    successPUT: state.successPUT,
    isloadingDELETE: state.isloadingDELETE,
    successDELTE: state.successDELTE
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { makeSmurfs, editSmurfs }
  )(SmurfForm)
);
