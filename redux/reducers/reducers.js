import {initialState} from './state';
import {SET_NAME} from '../types/types';
export const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_NAME:
      return {
        ...state,
        name: payload,
      };
    default:
      return state;
  }
};
