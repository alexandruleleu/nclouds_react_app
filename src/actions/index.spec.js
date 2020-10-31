import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getMetadataPaginated } from '../utils/utils';

import actionCreators from './actionCreators';

import {
  signInUser,
  signUpUser,
  fetchMetadata,
  fetchMoreMetadata,
  resetErrors,
  resetMessages,
  resetUserRegistration,
  setFavorite,
  setOnlyEven,
  setSearchText,
  setLoading,
  closeModal,
  signOut,
} from './index';

jest.mock('../utils/utils', () => ({
  getMetadataPaginated: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('test sign in', () => {
  it('should sign in with success', () => {
    const store = mockStore({});

    // should pass with right credentials
    const email = 'test@test.ro';
    const password = 'testtest';
    // Return the promise
    return store.dispatch(signInUser(email, password)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.signInRequest());
      expect(actions[1].type).toEqual(actionCreators.signInSuccess().type);
    });
  });

  it('should fail sign in', () => {
    const store = mockStore({});

    // should fail with wrong credentials
    const email = 'test@test';
    const password = 'dsdsd';
    // Return the promise
    return store.dispatch(signInUser(email, password)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.signInRequest());
      expect(actions[1].type).toEqual(actionCreators.signInFailure().type);
    });
  });
});

describe('test sign up', () => {
  let signUpEmail = '';
  const signUpFirstName = 'Elena';
  const signUpLastName = 'Farago';
  const signUpPassword = 'pasword';
  beforeAll(() => {
    const currentDate = new Date().valueOf();
    signUpEmail = `${currentDate}@test.ro`;
  });

  it('should sign up with success', () => {
    const store = mockStore({});

    // should pass with new credentials
    return store
      .dispatch(signUpUser(signUpFirstName, signUpLastName, signUpEmail, signUpPassword))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(actionCreators.signUpRequest());
        expect(actions[1].type).toEqual(actionCreators.signUpSuccess().type);
      });
  });

  it('should fail sign in', () => {
    const store = mockStore({});

    // should fail with existing credentials
    return store
      .dispatch(signUpUser(signUpFirstName, signUpLastName, signUpEmail, signUpPassword))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(actionCreators.signUpRequest());
        expect(actions[1].type).toEqual(actionCreators.signUpFailure().type);
      });
  });
});

describe('test loading metadata', () => {
  it('should load metadata with success', () => {
    getMetadataPaginated.mockResolvedValueOnce([]);
    const store = mockStore({});

    // should pass with new credentials
    return store.dispatch(fetchMetadata()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.metadataLoading());
      expect(actions[1].type).toEqual(actionCreators.metadataLoaded().type);
    });
  });

  it('should fail loading metadata', async () => {
    getMetadataPaginated.mockRejectedValueOnce('error');
    const store = mockStore({});

    // should fail with existing credentials
    return store.dispatch(fetchMetadata()).then(async () => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.metadataLoading());
      expect(actions[1].type).toEqual(actionCreators.metadataError().type);
    });
  });

  it('should load more metadata with success', () => {
    getMetadataPaginated.mockResolvedValueOnce([]);
    const store = mockStore({ modalContentReducer: { pageNumber: 1 } });

    // should pass with new credentials
    return store.dispatch(fetchMoreMetadata()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.metadataLoadingMore());
      expect(actions[1].type).toEqual(actionCreators.metadataLoadedMore().type);
    });
  });

  it('should fail loading more metadata', async () => {
    getMetadataPaginated.mockRejectedValueOnce('error');
    const store = mockStore({ modalContentReducer: { pageNumber: 1 } });

    // should fail with existing credentials
    return store.dispatch(fetchMoreMetadata()).then(async () => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.metadataLoadingMore());
      expect(actions[1].type).toEqual(actionCreators.metadataError().type);
    });
  });
});

describe('test reset data', () => {
  it('should reset errors', () => {
    const store = mockStore({});

    return store.dispatch(resetErrors()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.resetErrors());
    });
  });

  it('should reset messages', () => {
    const store = mockStore({});

    return store.dispatch(resetMessages()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.resetMessages());
    });
  });

  it('should reset user registration', () => {
    const store = mockStore({});

    return store.dispatch(resetUserRegistration()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.resetUserRegistration());
    });
  });
});

describe('test set data', () => {
  it('should set favorite', () => {
    const store = mockStore({});

    return store.dispatch(setFavorite(true, 1)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.setFavorite(true, 1));
    });
  });

  it('should set only even', () => {
    const store = mockStore({});

    return store.dispatch(setOnlyEven(false)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.setOnlyEven(false));
    });
  });

  it('should set search text', () => {
    const store = mockStore({});

    return store.dispatch(setSearchText('jest power')).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.setSearchText('jest power'));
    });
  });

  it('should set loading', () => {
    const store = mockStore({});

    return store.dispatch(setLoading(true)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.setLoading(true));
    });
  });

  it('should close modal', () => {
    const store = mockStore({});

    return store.dispatch(closeModal()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.closeModal());
    });
  });
});

describe('test sign out', () => {
  it('should sign out', () => {
    const store = mockStore({});

    // Return the promise
    return store.dispatch(signOut()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(actionCreators.signOut());
    });
  });
});
