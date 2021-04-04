// ADD_TASK
export const addTask = (title) => ({
  type: "ADD_TASK",
  title,
});

// REMOVE_TASK
export const removeTask = (id) => ({
  type: "REMOVE_TASK",
  id,
});

// EDIT_TASK
export const editTask = (id, updates) => ({
  type: "EDIT_TASK",
  id,
  updates,
});

// SET_TASKS
export const setTasks = (data) => ({
  type: "SET_TASKS",
  data,
});
