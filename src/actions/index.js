import firebaseProvider from '../config/Firebase';
import actionCreators from './actionCreators';
import { CUSTOM_MESSAGES } from '../utils/constants';
import { getMetadataPaginated } from '../utils/utils';

const auth = firebaseProvider.auth();

export const signInUser = (email, password) => async (dispatch) => {
  dispatch(actionCreators.signInRequest());

  try {
    const rsp = await auth.signInWithEmailAndPassword(email, password);
    dispatch(actionCreators.signInSuccess());
    return rsp;
  } catch (err) {
    dispatch(actionCreators.signInFailure(err));
  }
};

export const signUpUser = (signUpFirstName, signUpLastName, signUpEmail, signUpPassword) => async (
  dispatch
) => {
  dispatch(actionCreators.signUpRequest());

  try {
    const rsp = await auth.createUserWithEmailAndPassword(signUpEmail, signUpPassword);
    const { user } = rsp;
    const updateProfile = user.updateProfile({
      displayName: `${signUpFirstName} ${signUpLastName}`,
    });
    await updateProfile;
    dispatch(actionCreators.signUpSuccess(CUSTOM_MESSAGES.createAccount));
    return {
      message: CUSTOM_MESSAGES.createAccount,
    };
  } catch (err) {
    dispatch(actionCreators.signUpFailure(err));
  }
};

export const resetErrors = () => async (dispatch) => dispatch(actionCreators.resetErrors());
export const resetMessages = () => async (dispatch) => dispatch(actionCreators.resetMessages());
export const resetUserRegistration = () => async (dispatch) =>
  dispatch(actionCreators.resetUserRegistration());
export const signOut = () => async (dispatch) => {
  auth.signOut();
  dispatch(actionCreators.signOut());
};
export const setFavorite = (val, index) => async (dispatch) =>
  dispatch(actionCreators.setFavorite(val, index));
export const setOnlyEven = (val) => async (dispatch) => dispatch(actionCreators.setOnlyEven(val));
export const setLoading = (val) => async (dispatch) => dispatch(actionCreators.setLoading(val));

export const fetchMetadata = () => async (dispatch) => {
  dispatch(actionCreators.metadataLoading());

  try {
    const res = await getMetadataPaginated(1);
    dispatch(actionCreators.metadataLoaded(res));
  } catch (err) {
    console.log(err);
    dispatch(actionCreators.metadataError(err));
  }
};

export const fetchMoreMetadata = () => async (dispatch, getState) => {
  dispatch(actionCreators.metadataLoadingMore());
  const { pageNumber } = getState().modalContentReducer;

  try {
    const res = await getMetadataPaginated(pageNumber);
    dispatch(actionCreators.metadataLoadedMore(res));
  } catch (err) {
    console.log(err);
    dispatch(actionCreators.metadataError(err));
  }
};
