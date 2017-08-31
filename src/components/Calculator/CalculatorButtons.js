import React, {Component} from 'react';

class CalculatorButtons extends Component {

  displayNum(currentStateOfApplication) {
    if (currentStateOfApplication.firstOperandSet) {
      return currentStateOfApplication.secondOperand;
    }
    if (!currentStateOfApplication.firstOperandSet) {
      return currentStateOfApplication.firstOperand;
    }
  }

  render() {


    const { currentState } = this.props;

    return(
      <div>
        <div className="calculator-highest-parent">
          <div className="calculator-screen-and-reset">
            <div className="calculator-reset" onClick={() => this.props.resetClick()}>
              R
            </div>
            <div className="calculator-screen">
              {this.displayNum(currentState)}
            </div>
          </div>
          <div className="calculator-button-parent">
            <div className="calculator-button" onClick={() => this.props.numberClick(7, currentState.firstOperandSet)}>7</div>
            <div className="calculator-button" onClick={() => this.props.numberClick(8, currentState.firstOperandSet)}>8</div>
            <div className="calculator-button" onClick={() => this.props.numberClick(9, currentState.firstOperandSet)}>9</div>
            <div className="calculator-button" onClick={() => this.props.setOperator('/')}>/</div>
          </div>
          <div className="calculator-button-parent">
            <div className="calculator-button" onClick={() => this.props.numberClick(4, currentState.firstOperandSet)}>4</div>
            <div className="calculator-button" onClick={() => this.props.numberClick(5, currentState.firstOperandSet)}>5</div>
            <div className="calculator-button" onClick={() => this.props.numberClick(6, currentState.firstOperandSet)}>6</div>
            <div className="calculator-button" onClick={() => this.props.setOperator('*')}>*</div>
          </div>
          <div className="calculator-button-parent">
            <div className="calculator-button" onClick={() => this.props.numberClick(1, currentState.firstOperandSet)}>1</div>
            <div className="calculator-button" onClick={() => this.props.numberClick(2, currentState.firstOperandSet)}>2</div>
            <div className="calculator-button" onClick={() => this.props.numberClick(3, currentState.firstOperandSet)}>3</div>
            <div className="calculator-button" onClick={() => this.props.setOperator('-')}>-</div>
          </div>
          <div className="calculator-button-parent">
            <div className="calculator-button" onClick={() => this.props.numberClick(0, currentState.firstOperandSet)}>0</div>
            <div className="calculator-button">.</div>
            <div className="calculator-button" onClick={() => this.props.calculateClick()}>=</div>
            <div className="calculator-button" onClick={() => this.props.setOperator('+')}>+</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorButtons;
