import axios from "axios";
import * as types from "./actionType";
//get tasks

const getData = () => (dispatch) => {
  dispatch({ type: types.GET_TASKS_REQUEST });
  return axios
    .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks`)
    .then((r) => {
      dispatch({ type: types.GET_TASKS_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_TASKS_FAILURE });
    });
};

//add task

const addData = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_TASK_REQUEST });
  return axios
    .post(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks`,
      payload
    )
    .then((r) => {
      dispatch({ type: types.ADD_TASK_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.ADD_TASK_FAILURE });
    });
};

//update task

const updateData = (id,payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_TASK_REQUEST });
  return axios
    .patch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks/${id}`,payload
    )
    .then((r) => {
      dispatch({
        type: types.UPDATE_TASK_SUCCESS,
        payload:r.data,
      });
    })
    .catch((e) => {
      dispatch({ type: types.UPDATE_TASK_FAILURE });
    });
};
//delete task


const deleteDataSucess = (payload) => {
  return {
    type: types.DELETE_TASK_SUCCESS,
    payload,
  };
};



const deleteData = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_TASK_REQUEST});
  return axios
    .delete(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks/${id}`
    )
    .then((r) => {
      dispatch(deleteDataSucess());
    })
    .catch((e) => {
      dispatch({type: types.DELETE_TASK_FAILURE});
    });
};

export { getData, addData, updateData, deleteData };