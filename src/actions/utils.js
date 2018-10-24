export const thunkCreator = action => {
  const { types, promise, ...rest } = action;
  const [REQUESTED, RESOLVED, REJECTED] = types;
  return dispatch => {
    dispatch({ ...rest, type: REQUESTED });
    return promise
      .then(result => {
        dispatch({ ...rest, type: RESOLVED, result: result });
        return result;
      })
      .catch(err => dispatch({ ...rest, type: REJECTED, error: err }));
  };
};
