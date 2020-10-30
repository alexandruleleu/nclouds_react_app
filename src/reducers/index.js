import { combineReducers } from 'redux';

// Reducers for all components
import login from './login';
import details from './details';
import registration from './registration';
import home from './home';
import modal from './modal';

// root reducer
export default combineReducers({
  loginReducer: login,
  registrationReducer: registration,
  homeReducer: home,
  modalContentReducer: modal,
  detailsReducer: details,
});
