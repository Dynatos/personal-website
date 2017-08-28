import { connect } from 'react-redux';
import { toggleStat } from '../actions';
import RunescapeGearSuggestor from '../components/RSequipmentThing/RunescapeGearSuggestor';

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
