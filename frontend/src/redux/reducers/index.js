import { combineReducers } from "redux";
import sightingsReducer from './sightingsReducer'

export default combineReducers({
  sightings: sightingsReducer,
});
