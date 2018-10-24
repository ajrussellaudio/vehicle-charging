import {
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE
} from "./_types";
import { thunkCreator } from "./utils";

const url = "/api/retrieve/registry/format/json";

export const fetchLocations = () =>
  thunkCreator({
    types: [
      FETCH_LOCATIONS_REQUEST,
      FETCH_LOCATIONS_SUCCESS,
      FETCH_LOCATIONS_FAILURE
    ],
    promise: fetch(url, { mode: "no-cors" }).then(res => res.json())
  });
