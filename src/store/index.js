import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import middleware from "./middleware";
import appReducer from "../reducers";

export default function configureStore(initialState) {
  return createStore(appReducer, initialState, composeWithDevTools(middleware));
}
