import sightings from '../apis/sightings'
import { FETCH_SIGHTINGS,
         FETCH_SIGHTING,
         CREATE_SIGHTING } from './types'

export const fetchSightings = () => async dispatch => {
  const response = await sightings.get('');
  dispatch({type: FETCH_SIGHTINGS, payload: response.data.results})
};

export const fetchSighting = (id) => async dispatch => {
  const response = await sightings.get(`/${id}`);
  dispatch({type: FETCH_SIGHTING, payload: response.data})
};

export const createGiraffeSighting = (formValues) => async dispatch => {
  const response = await sightings.post('giraffes/', formValues);
  console.log(response);
  dispatch({type: CREATE_SIGHTING, payload: response.data})
};