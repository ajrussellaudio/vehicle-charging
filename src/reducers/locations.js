import { FETCH_LOCATIONS_SUCCESS } from "../actions";

export default function locationsReducer(state = [], action) {
  if (action.type === FETCH_LOCATIONS_SUCCESS) {
    return action.result;
  }
  return state;
}
