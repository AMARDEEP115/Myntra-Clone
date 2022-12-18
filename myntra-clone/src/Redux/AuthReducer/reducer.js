// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionType";

const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.GET_TASKS_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_TASKS_SUCCESS:
      return { ...state, isLoading: false, tasks: payload };

    case types.GET_TASKS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    // case types.ADD_TASK_REQUEST:
    //   return { ...state, isLoading: true };

    // case types.ADD_TASK_SUCCESS:
    //   const newData = [...state.tasks, payload];

    //   return { ...state, isLoading: false, tasks: newData };

    // case types.ADD_TASK_FAILURE:
    //   return { ...state, isLoading: false, isError: true };

    // case types.UPDATE_TASK_REQUEST:
    //   return { ...state, isLoading: true };

    // case types.UPDATE_TASK_SUCCESS:
    //   let newTask = state.tasks.map((el) => el.id === payload.id ? payload : el);
    //   return { ...state, isLoading: false, tasks: newTask };

    // case types.UPDATE_TASK_FAILURE:
    //   return { ...state, isLoading: false, isError: true };

    // case types.DELETE_TASK_REQUEST:
    //   return { ...state, isLoading: true };

    // case types.DELETE_TASK_SUCCESS:
    //   let filterTask = state.tasks.filter((el) =>  el.id !== payload)
    //   return { ...state, isLoading: false ,tasks:filterTask};

    // case types.DELETE_TASK_FAILURE:
    //   return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }

  //write the logic to handle, get task, update task, add task, and delete task
};

export { reducer };
