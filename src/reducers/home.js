import * as actionTypes from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  name: 'home-reducer',
  onlyEven: false,
  searchText: '',
};

const home = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.SIGN_OUT:
        draft.onlyEven = false;
        break;
      case actionTypes.SET_ONLY_EVEN:
        draft.onlyEven = action.val;
        break;
      case actionTypes.SET_SEARCH_TEXT:
        draft.searchText = action.val;
        break;
      default:
    }
  });
};

export default home;
