import { connect } from 'react-redux';
import { calculatePOEDPS } from '../actions';
import PathOfExileDPSContainer from '../components/PathOfExileDPS/PathOfExileDPSContainer';

const mapStateToProps = state => {
  return {
    physical: state.PathOfExileReducer.physical,
    elemental: state.PathOfExileReducer.elemental,
    chaos: state.PathOfExileReducer.chaos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calculatePOEDPS: itemData => {
      dispatch(calculatePOEDPS(itemData));
    }
  };
};

const PathOfExileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PathOfExileDPSContainer);

export default PathOfExileContainer;
