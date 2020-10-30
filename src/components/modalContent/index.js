import { connect } from 'react-redux';
import ModalContentComponent from './ModalContent';
import { fetchMetadata, fetchMoreMetadata, setFavorite, setLoading } from '../../actions';
import {
  getFavoriteCountries,
  getEvenCountries,
  getLoadMorePermission,
  getFilteredDataByCountry,
  getFilteredFavoritesData,
} from '../../selectors';

const mapStateToProps = (state) => ({
  ...state.modalContentReducer,
  favoriteCountries: getFavoriteCountries(state),
  favoriteCountriesFiltered: getFilteredFavoritesData(state),
  onlyEvenCountries: getEvenCountries(state),
  loadMorePermission: getLoadMorePermission(state),
  filteredDataByCountry: getFilteredDataByCountry(state),
  onlyEven: state.homeReducer.onlyEven,
  searchText: state.homeReducer.searchText,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchMetadata: () => {
    dispatch(fetchMetadata());
  },
  onFetchMoreMetadata: () => {
    dispatch(fetchMoreMetadata());
  },
  onSetFavorite: (val, id) => {
    dispatch(setFavorite(val, id));
  },
  onSetLoading: (val) => {
    dispatch(setLoading(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContentComponent);
