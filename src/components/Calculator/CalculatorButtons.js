import React, {Component} from 'react';
//import { rowA, rowB, rowC, rowD } from './calculatorButtonMapData';

class CalculatorButtons extends Component {

  render() {
    const { currentState } = this.props;

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
            <div className="calculator-button-triple" onClick={() => this.props.resetClick()}>C</div>
            <div className="calculator-button" onClick={() => this.props.setOperator('/')}>/</div>
          </div>
          <div className="calculator-button-parent">
            <div className="calculator-button" onClick={() => this.props.numberClick("7")}>7</div>
            <div className="calculator-button" onClick={() => this.props.numberClick("8")}>8</div>
            <div className="calculator-button" onClick={() => this.props.numberClick("9")}>9</div>
            <div className="calculator-button" onClick={() => this.props.setOperator('*')}>X</div>
          </div>
          <div className="calculator-button-parent">
            <div className="calculator-button" onClick={() => this.props.numberClick("4")}>4</div>
            <div className="calculator-button" onClick={() => this.props.numberClick("5")}>5</div>
            <div className="calculator-button" onClick={() => this.props.numberClick("6")}>6</div>
            <div className="calculator-button" onClick={() => this.props.setOperator('-')}>-</div>
          </div>
          <div className="calculator-button-parent">
            <div className="calculator-button" onClick={() => this.props.numberClick("1")}>1</div>
            <div className="calculator-button" onClick={() => this.props.numberClick("2")}>2</div>
            <div className="calculator-button" onClick={() => this.props.numberClick("3")}>3</div>
            <div className="calculator-button" onClick={() => this.props.setOperator('+')}>+</div>
          </div>
          <div className="calculator-button-parent">
            <div className="calculator-button-double" onClick={() => this.props.numberClick("0")}>0</div>
            <div className="calculator-button" onClick={() => this.props.periodClick()}>.</div>
            <div className="calculator-button" onClick={() => this.props.calculateClick()}>=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorButtons;
