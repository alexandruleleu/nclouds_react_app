import * as actionTypes from './actionTypes';

export default {
  signInRequest() {
    return {
      type: actionTypes.SING_IN_REQUEST,
    };
  },
  signInSuccess() {
    return {
      type: actionTypes.SIGN_IN_SUCCESS,
    };
  },
  signInFailure(error) {
    return {
      type: actionTypes.SIGN_IN_FAILURE,
      error,
    };
  },
  signUpRequest() {
    return {
      type: actionTypes.SING_UP_REQUEST,
    };
  },
  signUpSuccess(message) {
    return {
      type: actionTypes.SIGN_UP_SUCCESS,
      message,
    };
  },
  signUpFailure(error) {
    return {
      type: actionTypes.SIGN_UP_FAILURE,
      error,
    };
  },
  resetErrors() {
    return {
      type: actionTypes.RESET_ERRORS,
    };
  },
  resetMessages() {
    return {
      type: actionTypes.RESET_MESSAGES,
    };
  },
  resetUserRegistration() {
    return {
      type: actionTypes.RESET_USER_REGISTRATION,
    };
  },
  signOut() {
    return {
      type: actionTypes.SIGN_OUT,
    };
  },
  metadataLoading() {
    return {
      type: actionTypes.METADATA_LOADING,
    };
  },
  metadataLoaded(data) {
    return {
      type: actionTypes.METADATA_LOADED,
      data,
    };
  },
  metadataLoadingMore() {
    return {
      type: actionTypes.METADATA_LOADING_MORE,
    };
  },
  metadataLoadedMore(data) {
    return {
      type: actionTypes.METADATA_LOADED_MORE,
      data,
    };
  },
  metadataError(err) {
    return {
      type: actionTypes.METADATA_ERROR,
      err,
    };
  },
  setFavorite(val, id) {
    return {
      type: actionTypes.SET_FAVORITE,
      val,
      id,
    };
  },
  setOnlyEven(val) {
    return {
      type: actionTypes.SET_ONLY_EVEN,
      val,
    };
  },
  setSearchText(val) {
    return {
      type: actionTypes.SET_SEARCH_TEXT,
      val,
    };
  },
  setLoading(val) {
    return {
      type: actionTypes.SET_LOADING,
      val,
    };
  },
  closeModal() {
    return {
      type: actionTypes.CLOSE_MODAL,
    };
  },
};
