import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getMetadataPaginated } from '../utils/utils';

import actionCreators from './actionCreators';

import {
  signInUser,
  signUpUser,
  fetchMetadata,
  fetchMoreMetadata
} from './index';

jest.mock('../utils/utils', () => ({
  getMetadataPaginated: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('test sign in', () => {
  it('should sign in with success', () => {
    const store = mockStore({})

    // should pass with right credentials
    const email = "test@test.ro";
    const password = "testtest";
    // Return the promise
    return store.dispatch(signInUser(email, password))
      .then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(actionCreators.signInRequest())
        expect(actions[1].type).toEqual(actionCreators.signInSuccess().type)
      })
  });

  it('should fail sign in', () => {
    const store = mockStore({})

    // should fail with wrong credentials
    const email = "test@test";
    const password = "dsdsd";
    // Return the promise
    return store.dispatch(signInUser(email, password))
      .then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(actionCreators.signInRequest())
        expect(actions[1].type).toEqual(actionCreators.signInFailure().type)
      })
  });
});

describe('test sign up', () => {
  let signUpEmail = '';
  const signUpFirstName = "Elena";
  const signUpLastName = "Farago";
  const signUpPassword = "pasword";
  beforeAll(() => {
    const currentDate = new Date().valueOf();
    signUpEmail = `${currentDate}@test.ro`;
  });

  it('should sign up with success', () => {
    const store = mockStore({});

    // should pass with new credentials
    return store.dispatch(signUpUser(signUpFirstName, signUpLastName, signUpEmail, signUpPassword))
      .then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(actionCreators.signUpRequest())
        expect(actions[1].type).toEqual(actionCreators.signUpSuccess().type)
      })
  });

  it('should fail sign in', () => {
    const store = mockStore({})

    // should fail with existing credentials
    return store.dispatch(signUpUser(signUpFirstName, signUpLastName, signUpEmail, signUpPassword))
      .then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(actionCreators.signUpRequest())
        expect(actions[1].type).toEqual(actionCreators.signUpFailure().type)
      })
  });
});

describe('test loading metadata', () => {
  it('should load metadata with success', () => {
    getMetadataPaginated.mockResolvedValueOnce([]);
    const store = mockStore({});

    // should pass with new credentials
    return store.dispatch(fetchMetadata())
      .then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(actionCreators.metadataLoading())
        expect(actions[1].type).toEqual(actionCreators.metadataLoaded().type)
      })
  });

  it('should fail loading metadata', async () => {
    getMetadataPaginated.mockRejectedValueOnce('error');
    const store = mockStore({})

    // should fail with existing credentials
    return store.dispatch(fetchMetadata())
      .then(async () => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(actionCreators.metadataLoading())
        expect(actions[1].type).toEqual(actionCreators.metadataError().type)
      })
  });
});