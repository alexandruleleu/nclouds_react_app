import { connect } from 'react-redux';
import RegistrationComponent from './Registration';
import { signUpUser, resetErrors, resetMessages } from '../../../actions';

const mapStateToProps = (state) => ({ ...state.registrationReducer });

const mapDispatchToProps = (dispatch) => ({
  onSignUpUser: async (signUpFirstName, signUpLastName, signUpEmail, signUpPassword) => {
    dispatch(signUpUser(signUpFirstName, signUpLastName, signUpEmail, signUpPassword));
  },
  onResetErrors: async () => {
    dispatch(resetErrors());
  },
  onResetMessages: async () => {
    dispatch(resetMessages());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationComponent);
