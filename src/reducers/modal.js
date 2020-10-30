import * as actionTypes from '../actions/actionTypes';
import { TOTAL_COUNT } from '../utils/constants';
import produce from 'immer';

const initialState = {
  name: 'modal-reducer',
  loading: false,
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
          Id: index,
          Favorite: !!draft.favoriteIds[index],
        }));
        break;
      case actionTypes.SET_LOADING:
        draft.loading = action.val;
        break;
      case actionTypes.SET_FAVORITE:
        const { val, index } = action;
        //insertion and deletion are more faster in objects
        draft.data[index].Favorite = val;
        val ? (draft.favoriteIds[index] = index) : delete draft.favoriteIds[index];
        break;
      default:
    }
  });
};

export default login;
