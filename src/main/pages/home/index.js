import { connect } from 'react-redux';
import HomeComponent from './Home';
import { signOut, setOnlyEven } from '../../../actions';

const mapStateToProps = (state) => ({
  ...state.homeReducer,
});

const mapDispatchToProps = (dispatch) => ({
  onSignOut: async () => {
    dispatch(signOut());
  },
  onSetOnlyEven: async (val) => {
    dispatch(setOnlyEven(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
