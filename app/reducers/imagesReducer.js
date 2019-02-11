import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const images = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_IMAGES_SUCCESS:
      return Object.assign({}, state, {
        images: action.images
      });

    default:
      return state;
  }
};
