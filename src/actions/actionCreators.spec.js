import configureStore from 'redux-mock-store'; //ES6 modules

import actionCreators from './actionCreators';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('check actions are dispatched', () => {
  let initialState = {};
  let store = {};

  beforeEach(() => {
    // Initialize mockstore with empty state
    initialState = {};
    store = mockStore(initialState);
  });

  it('should dispatch sign in request action', () => {
    // Dispatch the action
    store.dispatch(actionCreators.signInRequest());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'SIGN_IN_REQUEST' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch sign in success action', () => {
    // Dispatch the action
    store.dispatch(actionCreators.signInSuccess());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'SIGN_IN_SUCCESS' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch sign in failure action', () => {
    // Dispatch the action
    const error = 'Sign in denied';
    store.dispatch(actionCreators.signInFailure(error));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'SIGN_IN_FAILURE', error };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch sign up request action', () => {
    // Dispatch the action
    store.dispatch(actionCreators.signUpRequest());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'SIGN_UP_REQUEST' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch sign up success action', () => {
    // Dispatch the action
    const message = 'Sign up is successfull';
    store.dispatch(actionCreators.signUpSuccess(message));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'SIGN_UP_SUCCESS', message };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch sign up failure action', () => {
    // Dispatch the action
    const error = 'Sign up denied';
    store.dispatch(actionCreators.signUpFailure(error));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'SIGN_UP_FAILURE', error };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch reset errors action', () => {
    // Dispatch the action
    store.dispatch(actionCreators.resetErrors());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'RESET_ERRORS' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch reset messages action', () => {
    // Dispatch the action
    store.dispatch(actionCreators.resetMessages());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'RESET_MESSAGES' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch reset user registration action', () => {
    // Dispatch the action
    store.dispatch(actionCreators.resetUserRegistration());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'RESET_USER_REGISTRATION' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch sign out action', () => {
    // Dispatch the action
    store.dispatch(actionCreators.signOut());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'SIGN_OUT' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch metadata is loading action', () => {
    // Dispatch the action
    store.dispatch(actionCreators.metadataLoading());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'METADATA_LOADING' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch metadata has been loaded action', () => {
    // Dispatch the action
    const data = [];
    store.dispatch(actionCreators.metadataLoaded(data));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'METADATA_LOADED', data };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch metadata is loading more action', () => {
    // Dispatch the action
    store.dispatch(actionCreators.metadataLoadingMore());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'METADATA_LOADING_MORE' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch metadata has loading more data action', () => {
    // Dispatch the action
    const data = [];
    store.dispatch(actionCreators.metadataLoadedMore(data));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'METADATA_LOADED_MORE', data };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch metadata loading resulted in error action', () => {
    // Dispatch the action
    const err = 'Loading metadata has failed';
    store.dispatch(actionCreators.metadataError(err));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'METADATA_ERROR', err };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch add favourite action', () => {
    // Dispatch the action
    const id = 1;
    const val = 'America';
    store.dispatch(actionCreators.setFavorite(val, id));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'SET_FAVORITE', val, id };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch only even state action', () => {
    // Dispatch the action
    const val = true;
    store.dispatch(actionCreators.setOnlyEven(val));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'SET_ONLY_EVEN', val };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch loading state action', () => {
    // Dispatch the action
    const val = true;
    store.dispatch(actionCreators.setLoading(val));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'SET_LOADING', val };
    expect(actions).toEqual([expectedPayload]);
  });
});
