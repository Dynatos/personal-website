import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { rowA, rowB, rowC, rowD } from './calculatorButtonMapData';

class CalculatorButtons extends Component {

  render() {
    const { currentState, numberClick, resetClick, setOperator, periodClick, calculateClick } = this.props;

    /*const buttonMapCallback = (singleButtonData) => {
      return (
        <div key={singleButtonData.value} className={"calculator-button " + singleButtonData.uniqueClassName}
             onClick={singleButtonData.actionToDispatch}>
          {singleButtonData.displayValue}
        </div>
      );
    };*/

    return(
      <div>
        <div className="calculator-highest-parent">
          <div className="calculator-screen">
            {currentState.equation}
          </div>
          <div className="calculator-button-parent">
            <div className="calculator-button-triple" onClick={() => resetClick()}>C</div>
            <div className="calculator-button" onClick={() => setOperator('/')}>/</div>
          </div>
          <div className="calculator-button-parent">
            <div className="calculator-button" onClick={() => numberClick("7")}>7</div>
            <div className="calculator-button" onClick={() => numberClick("8")}>8</div>
            <div className="calculator-button" onClick={() => numberClick("9")}>9</div>
            <div className="calculator-button" onClick={() => setOperator('*')}>X</div>
          </div>
          <div className="calculator-button-parent">
            <div className="calculator-button" onClick={() => numberClick("4")}>4</div>
            <div className="calculator-button" onClick={() => numberClick("5")}>5</div>
            <div className="calculator-button" onClick={() => numberClick("6")}>6</div>
            <div className="calculator-button" onClick={() => setOperator('-')}>-</div>
          </div>
          <div className="calculator-button-parent">
            <div className="calculator-button" onClick={() => numberClick("1")}>1</div>
            <div className="calculator-button" onClick={() => numberClick("2")}>2</div>
            <div className="calculator-button" onClick={() => numberClick("3")}>3</div>
            <div className="calculator-button" onClick={() => setOperator('+')}>+</div>
          </div>
          <div className="calculator-button-parent">
            <div className="calculator-button-double" onClick={() => numberClick("0")}>0</div>
            <div className="calculator-button" onClick={() => periodClick()}>.</div>
            <div className="calculator-button" onClick={() => calculateClick()}>=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorButtons;

CalculatorButtons.propTypes = {
  currentState: PropTypes.object.isRequired,
  numberClick: PropTypes.func.isRequired,
  resetClick: PropTypes.func.isRequired,
  setOperator: PropTypes.func.isRequired,
  periodClick: PropTypes.func.isRequired,
  calculateClick: PropTypes.func.isRequired
};
