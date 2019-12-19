import {connect} from "react-redux";
import RoomsContainer from '../components/RoomsContainer';

const mapStateToProps = state => {
  return {
    appState: state.rootReducer
  }
};

export default connect (
  mapStateToProps
)(RoomsContainer);
