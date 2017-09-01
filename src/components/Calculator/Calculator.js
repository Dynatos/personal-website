import React, {Component} from 'react';
import NavBar from "../NavBar/NavBar";
import CalculatorButtons from "./CalculatorButtons";

export default class Calculator extends Component {

  handleNumberClick(operand, firstOperandSet) {
    if (firstOperandSet) {
      this.props.secondOperand(operand, firstOperandSet);
    }
    if (!firstOperandSet) {
      this.props.firstOperand(operand, firstOperandSet);
    }
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
        <CalculatorButtons numberClick={(operand, firstOperandSet) => this.handleNumberClick(operand, firstOperandSet)}
                           calculateClick={() => this.handleCalculate()} resetClick={() => this.handleReset()}
                           setOperator={(operator) => this.handleOperator(operator)} periodClick={() => this.addPeriod()}
                           currentState={currentStateOfApplication} />
      </div>
    );
  }
}
