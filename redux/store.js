import {createStore, applyMiddleware, compose} from 'redux';
import {persistReducer} from 'redux-persist';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
// redux-persist merge level

// rootReducer
import {reducer} from './reducers/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whiteList: ['reducer'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

// const composeEnhancers = compose;
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const configureStore = () =>
  createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
