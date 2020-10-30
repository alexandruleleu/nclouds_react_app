import * as actionTypes from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  name: 'login-reducer',
  loading: false,
  errors: [],
};

const login = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.SING_IN_REQUEST:
        draft.loading = true;
        break;
      case actionTypes.SIGN_IN_SUCCESS:
        draft.loading = false;
        draft.errors.push('');
        break;
      case actionTypes.SIGN_IN_FAILURE:
        draft.loading = false;
        draft.errors.push(action.error.message);
        break;
      case actionTypes.RESET_ERRORS:
        draft.errors = [];
        break;
      default:
    }
  });
};

export default login;
