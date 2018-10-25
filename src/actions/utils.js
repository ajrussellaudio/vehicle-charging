import queryString from "query-string";
import { flatten, zip } from "lodash";

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

export const urlWithOptions = (baseUrl, search) => {
  const query = queryString.parse(search);
  const raw = flatten(zip(Object.keys(query), Object.values(query)));
  return [baseUrl, ...raw].join("/");
};
