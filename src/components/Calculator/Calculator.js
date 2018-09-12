import React, {Component} from 'react';
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

    const {currentStateOfApplication} = this.props;

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
