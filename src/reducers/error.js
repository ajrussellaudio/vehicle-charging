const _FAILURE = "_FAILURE";

export default function errorReducer(state = {}, action) {
  if (action.type.endsWith(_FAILURE)) {
    console.log("gets here");

    return action.error;
  }
  return state;
}
