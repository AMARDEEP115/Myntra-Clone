// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionType";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.GET_TASKS_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_TASKS_SUCCESS:
      return { ...state, isLoading: false, products: payload };

    case types.GET_TASKS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.ADD_TASK_REQUEST:
      return { ...state, isLoading: true };

    case types.ADD_TASK_SUCCESS:
      const newData = [...state.products, payload];

      return { ...state, isLoading: false, products: newData };

    case types.ADD_TASK_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.UPDATE_TASK_REQUEST:
      return { ...state, isLoading: true };

    case types.UPDATE_TASK_SUCCESS:
      let newTask = state.products.map((el) => el.id === payload.id ? payload : el);
      return { ...state, isLoading: false, products: newTask };

    case types.UPDATE_TASK_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.DELETE_TASK_REQUEST:
      return { ...state, isLoading: true };

    case types.DELETE_TASK_SUCCESS:
      let filterTask = state.tasks.filter((el) =>  el.id !== payload)
      return { ...state, isLoading: false ,tasks:filterTask};

    case types.DELETE_TASK_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }

  //write the logic to handle, get task, update task, add task, and delete task
};

export { reducer };
