import { connect } from 'react-redux';
import { toggleStat } from '../actions';
import RunescapeGearSuggestor from '../components/RSequipmentThing/RunescapeGearSuggestor';

//here we map the relevant state info for reference via this.props.DESIRED_KEY (eg statNameToggleValues for this)
//these keys can be assigned with "const {DESIRED_KEY} = this.props;", (this will result in statNameToggleValues
//being equal to an object with all statNames (attackStab, attackCrush, etc.) and their associated boolean values)
const mapStateToProps = state => {
  return {
    statNameToggleValues: state.toggleStat
  };
};

//here we map dispatch to props, so that when you call this.props.toggleStat() you dispatch the action to the store.
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
