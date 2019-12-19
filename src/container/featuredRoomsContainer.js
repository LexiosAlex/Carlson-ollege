import {connect} from "react-redux";
import FeaturedRooms from '../components/FeaturedRooms';
import {fetchRooms} from "../actions/actions";

const mapStateToProps = state => {
  return {
    appState: state
  }
};

const mapDispatchToProps = dispatch => ({
  fetchRooms: () => {
    dispatch(fetchRooms())
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FeaturedRooms);
