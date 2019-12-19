import {connect} from "react-redux";
import RoomsContainer from '../components/RoomsContainer';

const mapStateToProps = state => {
  return {
    appState: state.rootReducer
  }
};

const mapDispatchToProps = state => {

};

export default connect (
  mapStateToProps
)(RoomsContainer);
