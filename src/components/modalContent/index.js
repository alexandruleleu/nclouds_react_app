import { connect } from 'react-redux';
import ModalContentComponent from './ModalContent';
import { fetchMetadata, fetchMoreMetadata, setFavorite, setLoading } from '../../actions';
import { getFavoriteCountries, getEvenCountries } from '../../selectors';

const mapStateToProps = (state) => ({
  ...state.modalContentReducer,
  favoriteCountries: getFavoriteCountries(state.modalContentReducer),
  onlyEvenCountries: getEvenCountries(state.modalContentReducer),
  onlyEven: state.homeReducer.onlyEven,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchMetadata: () => {
    dispatch(fetchMetadata());
  },
  onFetchMoreMetadata: () => {
    dispatch(fetchMoreMetadata());
  },
  onSetFavorite: (val, index) => {
    dispatch(setFavorite(val, index));
  },
  onSetLoading: (val) => {
    dispatch(setLoading(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContentComponent);
