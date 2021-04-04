import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import tasksReducer from "../reducers/tasksReducer";
import filtersReducer from "../reducers/filtersReducer";
import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from "../storage/storage";
import { setTasks } from "../actions/tasks";
import { fetchDataFromJsonplaceholder } from "../request/jsonplaceholder";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      tasks: tasksReducer,
      filters: filtersReducer,
    }),
    { tasks: loadTasksFromLocalStorage() },
    composeEnhancers(applyMiddleware(thunk))
  );

  if (store.getState().tasks.length === 0) {
    fetchDataFromJsonplaceholder(10).then((data) => {
      store.dispatch(setTasks(data));
    });
  }

  store.subscribe(() => {
    saveTasksToLocalStorage(store.getState().tasks);
  });

  return store;
};
