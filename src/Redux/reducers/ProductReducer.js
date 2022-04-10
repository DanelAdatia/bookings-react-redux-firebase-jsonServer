import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  product: [],
  cities: [],
  search: [],
  flight:[],
  train:[]
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SHOW_DETAILS:
      return {
        ...state,
        product: payload,
      };
    case ActionTypes.CITY_DETAILS:
      return { ...state, cities: payload };
    case ActionTypes.SEARCH_FILTER:
      return { ...state, search: payload };
      case ActionTypes.SHOW_DETAILS_FLIGHT:
      return { ...state, flight: payload };
      case ActionTypes.SHOW_DETAILS_TRAIN:
        return { ...state, train: payload };
    default:
      return state;
  }
};
