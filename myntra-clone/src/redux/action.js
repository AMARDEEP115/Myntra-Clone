import axios from "axios";
import * as types from "./actionTypes";

export const DEALSOFTHEDAY = "DEALSOFTHEDAY";
export const BESTOFMYNTRA = "BESTOFMYNTRA";
export const TOPPICKS = "TOPPICKS";
export const CATEGORIESTOBAG = "CATEGORIESTOBAG";
export const ShopByCategories = "ShopByCategories";
export const DEALSOFLATESTARIVAL = "DEALSOFLATESTARIVAL";
export const NEWINTOPBRANDS = "NEWINTOPBRANDS";
export const TOPNININFLUNCEREXCLUSIVESTYLES = "TOPNININFLUNCEREXCLUSIVESTYLES";
export const getdealsOflaatestArival = (payload) => ({
  type: DEALSOFLATESTARIVAL,
  payload,
});
export const getNewTopBrands = (payload) => ({
  type: NEWINTOPBRANDS,
  payload,
});
export const getTopInInfluncerExclusive = (payload) => ({
  type: TOPNININFLUNCEREXCLUSIVESTYLES,
  payload,
});
export const getDealsOftheData = (payload) => ({
  type: DEALSOFTHEDAY,
  payload,
});

export const getBestOfMyntra = (payload) => ({
  type: BESTOFMYNTRA,
  payload,
});

export const getTopPicksData = (payload) => ({
  type: TOPPICKS,
  payload,
});

export const getCategoriesData = (payload) => ({
  type: CATEGORIESTOBAG,
  payload,
});
export const ShopBycategory = (payload) => ({
  type: ShopByCategories,
  payload,
});

// --------------------------------------------

// const getWomensdataSuccess = (payload) => {
//   return {
//     type: types.GET_WDATA_SUCCESS,
//     payload,
//   };
// };

const getWomensdataRequest = () => {
  return {
    type: types.GET_WDATA_REQUEST,
  };
};

const getWomensdataFailure = () => {
  return {
    type: types.GET_WDATA_FAILURE,
  };
};
const getWomensData = (params) => (dispatch) => {
  dispatch(getWomensdataRequest);
  return axios
    .get("https://scary-fly-gilet.cyclic.app/women", params)
    .then((r) => {
      dispatch({
        type: types.GET_WDATA_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      dispatch(getWomensdataFailure);
    });
};
// MensData
// const getMensdataSuccess = (payload) => {
//   return {
//     type: types.GET_MDATA_SUCCESS,
//     payload,
//   };
// };

const getMensdataRequest = () => {
  return {
    type: types.GET_MDATA_REQUEST,
  };
};

const getMensdataFailure = () => {
  return {
    type: types.GET_MDATA_FAILURE,
  };
};
const getMensData = (params) => (dispatch) => {
  dispatch(getMensdataRequest);
  return axios
    .get("https://scary-fly-gilet.cyclic.app/men", params)
    .then((r) => {
      // console.log(r.data)
      dispatch({
        type: types.GET_MDATA_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      dispatch(getMensdataFailure);
    });
};
export { getWomensData, getMensData };
