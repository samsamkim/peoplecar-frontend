import _ from 'lodash';
import {
  FETCH_PERSON,
  FETCH_PERSONS,
  CREATE_PERSON,
  EDIT_PERSON,
  DELETE_PERSON
} from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PERSONS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_PERSON:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PERSON:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PERSON:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PERSON:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};