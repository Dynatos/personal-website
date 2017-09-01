import { connect } from 'react-redux';
import { firstOperand, secondOperand, setCalculatorOperator, calculateFinalValue, resetCalculator, addPeriod } from '../actions';
import Calculator from '../components/Calculator/Calculator';

// Here we map the relevant state info for reference via this.props.DESIRED_KEY (eg statNameToggleValues for this)
// these keys can be assigned with "const {DESIRED_KEY} = this.props;", (eg this will result in statNameToggleValues
// being equal to an objects with all statNames (attackStab, attackCrush, etc.) and their associated boolean values)
const mapStateToProps = state => {
  return {
    currentStateOfApplication: state.calculatorReducer
  };
};

// Here we map dispatch to props, so that when you call this.props.toggleStat() you dispatch the action to the store
const mapDispatchToProps = dispatch => {
  return {
    firstOperand: (operand, firstOperandSet) => {
      dispatch(firstOperand(operand, firstOperandSet));
    },
    secondOperand: (operand, firstOperandSet) => {
      dispatch(secondOperand(operand, firstOperandSet));
    },
    setOperator: operatorValue => {
      dispatch(setCalculatorOperator(operatorValue));
    },
    calculateValue: () => {
      dispatch(calculateFinalValue());
    },
    resetCalc: () => {
      dispatch(resetCalculator());
    },
    addPeriod: () => {
      dispatch(addPeriod());
    }
  };
};

const CalculatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);

export default CalculatorContainer;
