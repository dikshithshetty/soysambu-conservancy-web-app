import * as _ from 'lodash'
import {
  FETCH_SIGHTINGS,
  FETCH_SIGHTING,
  CREATE_SIGHTING,
} from '../actions/types'

const sightingsReducer = (state={}, action) => {
  switch (action.type) {
    case FETCH_SIGHTINGS:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    case FETCH_SIGHTING:
      return {...state, [action.payload.id]: action.payload};
    case CREATE_SIGHTING:
      return {...state, [action.payload.id]: action.payload};
    default:
      return state;
  }
};

export default sightingsReducer