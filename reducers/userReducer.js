import actionTypes from '../core/actionTypes';
import initialState from '../core/initialStore';

export default function userReducer(state = initialState.userMedia, action) {
  switch (action.type) {
    case actionTypes.GET_MEDIA_OF_SINGLE_USER:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
