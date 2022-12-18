import * as types from "./actionTypes";

const initialState = {
  mens: [],
  isLoading: false,
  isError: false,
};

export const MensReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_MDATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_MDATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        mens: payload,
      };

    case types.GET_MDATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
