import {
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE
} from "./_types";
import { thunkCreator, urlWithOptions } from "./utils";

const baseUrl = "/api/retrieve/registry/format/json";
const url = urlWithOptions(baseUrl, window.location.search);

export const fetchLocations = () =>
  thunkCreator({
    types: [
      FETCH_LOCATIONS_REQUEST,
      FETCH_LOCATIONS_SUCCESS,
      FETCH_LOCATIONS_FAILURE
    ],
    promise: fetch(url).then(res => res.json())
  });
