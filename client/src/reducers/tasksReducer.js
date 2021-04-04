const tasksDefaultState = [];

const tasksReducer = (state = tasksDefaultState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      let newId;
      if (state.length > 0) {
        newId = Math.max(...state.map((tasks) => tasks.id)) + 1;
      } else {
        newId = 1;
      }
      const newTask = {
        id: newId,
        title: action.title,
        completed: false,
      };
      return [...state, newTask];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.id);
    case "EDIT_TASK":
      return state.map((task) => {
        if (task.id === action.id) {
          return { ...task, ...action.updates };
        } else {
          return task;
        }
      });
    case "SET_TASKS":
      return action.data;
    default:
      return state;
  }
};

export default tasksReducer;
