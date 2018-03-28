import { connect } from 'react-redux';
import calculateDPS from '../actions';
import PathOfExileDPSContainer from '../components/PathOfExileDPS/PathOfExileDPSContainer';

const mapStateToProps = state => {
  return {
    statNameToggleValues: state.toggleStat
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleStat: id => {
      dispatch(toggleStat(id));
    }
  };
};

const RunescapeGearSuggestorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RunescapeGearSuggestor);

export default RunescapeGearSuggestorContainer;
