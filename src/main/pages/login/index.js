import { connect } from 'react-redux';
import LoginComponent from './Login';
import { signInUser, resetErrors, resetUserRegistration } from '../../../actions';

const mapStateToProps = (state) => ({
  ...state.loginReducer,
  userRegistered: state.registrationReducer.userRegistered,
});

const mapDispatchToProps = (dispatch) => ({
  onSignInUser: async (email, password) => {
    dispatch(signInUser(email, password));
  },
  onResetErrors: async () => {
    dispatch(resetErrors());
  },
  onResetUserRegistration: async () => {
    dispatch(resetUserRegistration());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
