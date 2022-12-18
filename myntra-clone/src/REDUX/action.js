import axios from "axios";
import * as types from "./actionTypes";
const getWomensdataSuccess = (payload) => {
  return {
    type: types.GET_WDATA_SUCCESS,
    payload,
  };
};

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
const getWomensData =(params)=> (dispatch) => {
  dispatch(getWomensdataRequest);
  return axios
    .get("https://scary-fly-gilet.cyclic.app/women",params)
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
const getMensdataSuccess = (payload) => {
  return {
    type: types.GET_MDATA_SUCCESS,
    payload,
  };
};

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
const getMensData =(params)=>(dispatch) => {
  dispatch(getMensdataRequest);
  return axios
    .get("https://scary-fly-gilet.cyclic.app/men",params)
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
export {
    getWomensData,
    getMensData
}