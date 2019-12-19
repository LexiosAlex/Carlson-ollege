import {connect} from "react-redux";
import SinglePage from '../components/SinglePage';

const mapStateToProps = state => {
  return {
    appState: state.rootReducer
  }
};

export default connect (
  mapStateToProps
)(SinglePage);
