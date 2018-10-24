import { combineReducers } from "redux";

import locationsReducer from "./locations";
import loadingReducer from "./loading";
import errorReducer from "./error";

const reducer = combineReducers({
  locations: locationsReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default reducer;
