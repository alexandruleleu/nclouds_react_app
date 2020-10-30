import * as actionTypes from '../actions/actionTypes';
import { TOTAL_COUNT } from '../utils/constants';
import produce from 'immer';

const initialState = {
  name: 'modal-reducer',
  loading: false,
  loadingMore: false,
  data: [],
  favoriteIds: {},
  totalCount: TOTAL_COUNT,
  pageNumber: 1,
};

const login = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.METADATA_LOADING:
        draft.loading = true;
        break;
      case actionTypes.METADATA_LOADED:
        draft.loading = false;
        draft.data = action.data.map((item, index) => ({
          ...item,
          Id: index + 1,
          Favorite: !!draft.favoriteIds[index + 1],
        }));
        break;
      case actionTypes.METADATA_LOADING_MORE:
        draft.loadingMore = true;
        break;
      case actionTypes.METADATA_LOADED_MORE:
        draft.loadingMore = false;
        draft.pageNumber += 1;
        draft.data.push(
          ...action.data.map((item, index) => ({
            ...item,
            Id: draft.data.length + index + 1,
            Favorite: !!draft.favoriteIds[draft.data.length + index + 1],
          }))
        );
        break;
      case actionTypes.SET_LOADING:
        draft.loading = action.val;
        break;
      case actionTypes.SET_FAVORITE:
        const { val, id } = action;
        //insertion and deletion are more faster in objects
        draft.data[id - 1].Favorite = val;
        val ? (draft.favoriteIds[id] = id) : delete draft.favoriteIds[id];
        break;
      case actionTypes.CLOSE_MODAL:
        draft.data = [];
        draft.favoriteIds = {};
        draft.pageNumber = 1;
        break;
      default:
    }
  });
};

export default login;
