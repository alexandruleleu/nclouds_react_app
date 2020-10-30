import { connect } from 'react-redux';
import HomeComponent from './Home';
import { signOut, setOnlyEven, setSearchText, closeModal } from '../../../actions';

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
  onSetSearchText: async (val) => {
    dispatch(setSearchText(val));
  },
  onCloseModal: async () => {
    dispatch(closeModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
