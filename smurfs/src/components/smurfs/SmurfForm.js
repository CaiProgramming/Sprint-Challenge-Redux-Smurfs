import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { addSmurfs } from "../../actions";
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
    name: "",
    age: "",
    height: ""
  };
  textHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  submitHandler = () => {
    let Smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurfs(Smurf);
  };
  componentDidUpdate = () => {
    if (this.props.successPOST) {
      this.props.history.push("/home");
    }
  };
  render() {
    if (this.props.isloadingPOST) {
      return (
        <Container>
          <img src={Spinner} />
        </Container>
      );
    } else {
      return (
        <Card>
          <h2>Add your favorite Smurfs</h2>
          <div>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.textHandler}
            />
          </div>
          <div>
            <Input
              type="text"
              id="age"
              placeholder="Age"
              value={this.state.age}
              onChange={this.textHandler}
            />
          </div>
          <div>
            <Input
              type="text"
              id="height"
              placeholder="height"
              value={this.state.height}
              onChange={this.textHandler}
            />
          </div>
          <Btn onClick={this.submitHandler}>Submit Smurf</Btn>
        </Card>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isloadingPOST: state.isloadingPOST,
    successPOST: state.successPOST
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { addSmurfs }
  )(SmurfForm)
);
