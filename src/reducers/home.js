import * as actionTypes from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  name: 'home-reducer',
  onlyEven: false,
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

      default:
    }
  });
};

export default home;
