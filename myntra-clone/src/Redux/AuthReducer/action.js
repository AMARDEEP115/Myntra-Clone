import axios from "axios";
import * as types from "./actionType";
//get tasks

const getDataRequest = () => {
  return {
    type: types.GET_TASKS_REQUEST,
  };
};

const getDataSucess = (payload) => {
  return {
    type: types.GET_TASKS_SUCCESS,
    payload,
  };
};

const getDataError = () => {
  return {
    type: types.GET_TASKS_FAILURE,
  };
};

const getData = () => (dispatch) => {
  dispatch(getDataRequest());
  return axios
    .get(`https://scary-fly-gilet.cyclic.app/${parem}`)
    .then((r) => {
      dispatch(getDataSucess(r.data));
    })
    .catch((e) => {
      dispatch(getDataError());
    });
};

//add task

const addDataRequest = () => {
  return {
    type: types.ADD_TASK_REQUEST,
  };
};

const addDataSucess = (payload) => {
  return {
    type: types.ADD_TASK_SUCCESS,
    payload,
  };
};

const addDataError = () => {
  return {
    type: types.ADD_TASK_FAILURE,
  };
};

const addData = (payload) => (dispatch) => {
  dispatch(addDataRequest());
  return axios
    .post(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks`,
      payload
    )
    .then((r) => {
      dispatch(addDataSucess(r.data));
    })
    .catch((e) => {
      dispatch(addDataError());
    });
};

//update task
const updateDataRequest = () => {
  return {
    type: types.UPDATE_TASK_REQUEST,
  };
};

const updateDataSucess = (payload) => {
  return {
    type: types.UPDATE_TASK_SUCCESS,
    payload,
  };
};

const updateDataError = () => {
  return {
    type: types.UPDATE_TASK_FAILURE,
  };
};

const updateData = (payload) => (dispatch) => {
  dispatch(updateDataRequest());
  return axios
    .patch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks/${payload}`
    )
    .then((r) => {
      dispatch(updateDataSucess());
    })
    .catch((e) => {
      dispatch(updateDataError());
    });
};
//delete task

const deleteDataRequest = () => {
  return {
    type: types.DELETE_TASK_REQUEST,
  };
};

const deleteDataSucess = (payload) => {
  return {
    type: types.DELETE_TASK_SUCCESS,
    payload,
  };
};

const deleteDataError = () => {
  return {
    type: types.DELETE_TASK_FAILURE,
  };
};

const deleteData = (payload) => (dispatch) => {
  dispatch(deleteDataRequest());
  return axios
    .delete(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks/${payload}`
    )
    .then((r) => {
      dispatch(deleteDataSucess());
    })
    .catch((e) => {
      dispatch(deleteDataError());
    });
};

export { getData, addData, updateData, deleteData };
