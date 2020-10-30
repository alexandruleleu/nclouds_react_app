import * as actionTypes from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  name: 'registration-reducer',
  loading: false,
  userRegistered: false,
  errors: [],
  messages: [],
};

const login = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.SING_UP_REQUEST:
        draft.loading = true;
        break;
      case actionTypes.SIGN_UP_SUCCESS:
        draft.loading = false;
        draft.userRegistered = true;
        draft.errors.push('');
        draft.messages.push(action.message);
        break;
      case actionTypes.SIGN_UP_FAILURE:
        draft.loading = false;
        draft.errors.push(action.error.message);
        draft.messages.push('');
        break;
      case actionTypes.RESET_ERRORS:
        draft.errors = [];
        break;
      case actionTypes.RESET_MESSAGES:
        draft.messages = [];
        break;
      case actionTypes.RESET_USER_REGISTRATION:
        draft.userRegistered = false;
        break;
      default:
    }
  });
};

export default login;
