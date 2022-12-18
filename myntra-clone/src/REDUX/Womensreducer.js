import * as types from "./actionTypes";

const initialState = {
  womens: [],
  isLoading: false,
  isError: false,
};

export const Womensreducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_WDATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_WDATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        womens: payload,
      };

    case types.GET_WDATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
