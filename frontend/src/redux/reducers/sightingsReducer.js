import {
  FETCH_SIGHTINGS,
  FETCH_SIGHTING,
  CREATE_SIGHTING,
} from '../actions/types'

const sightingsReducer = (state={}, action) => {
  switch (action.type) {
    case FETCH_SIGHTINGS:
      return null;
    case FETCH_SIGHTING:
      return {...state, [action.payload.id]: action.payload};
    case CREATE_SIGHTING:
      return {...state, [action.payload.id]: action.payload};
    default:
      return state;
  }
};