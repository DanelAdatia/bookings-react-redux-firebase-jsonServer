import { ActionTypes } from "../constants/ActionTypes";

export const setDetails = (product) => {
  return {
    type: ActionTypes.SHOW_DETAILS,
    payload: product,
  };
};

export const cityDetails = (cities) => {
  return {
    type: ActionTypes.CITY_DETAILS,
    payload: cities,
  };
};

export const SearchFilter = (search) => {
  return {
    type: ActionTypes.SEARCH_FILTER,
    payload: search,
  };
};

export const setFlightDetails = (flight) => {
  return {
    type: ActionTypes.SHOW_DETAILS_FLIGHT,
    payload: flight,
  };
};


export const setTrainDetails = (train) => {
  return {
    type: ActionTypes.SHOW_DETAILS_TRAIN,
    payload: train,
  };
};