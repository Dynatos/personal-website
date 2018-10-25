import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from "../NavBar/NavBar";
import CalculatorButtons from "./CalculatorButtons";

export default class Calculator extends Component {

  handleNumberClick(operand) {
    this.props.pushNumber(operand);
  }

  handleOperator(operator) {
    this.props.setOperator(operator);
  }

  handleCalculate() {
    this.props.calculateValue();
  }

  handleReset() {
    this.props.resetCalc();
  }

  addPeriod() {
    this.props.addPeriod();
  }

  render() {

    const { currentStateOfApplication } = this.props;

    return(
      <div>
        <NavBar />
        <CalculatorButtons numberClick={(operand) => this.handleNumberClick(operand)}
                           calculateClick={() => this.handleCalculate()} resetClick={() => this.handleReset()}
                           setOperator={(operator) => this.handleOperator(operator)} periodClick={() => this.addPeriod()}
                           currentState={currentStateOfApplication} />
      </div>
    );
  }
}

Calculator.propTypes = {
  pushNumber: PropTypes.func.isRequired,
  setOperator: PropTypes.func.isRequired,
  calculateValue: PropTypes.func.isRequired,
  resetCalc: PropTypes.func.isRequired,
  addPeriod: PropTypes.func.isRequired,
  currentStateOfApplication: PropTypes.object.isRequired
};
