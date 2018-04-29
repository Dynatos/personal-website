import { connect } from 'react-redux';
import { calculateDPS } from '../actions';
import PathOfExileDPSContainer from '../components/PathOfExileDPS/PathOfExileDPSContainer';

const mapStateToProps = state => {
  return {
    statNameToggleValues: state.toggleStat
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calculateDPS: id => {
      dispatch(calculateDPS(id));
    }
  };
};

const PathOfExileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PathOfExileDPSContainer);

export default PathOfExileContainer;
