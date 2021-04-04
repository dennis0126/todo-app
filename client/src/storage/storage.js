const tasksLocalStorageKey = "react-todo-tasks";

export const saveTasksToLocalStorage = (data) => {
  localStorage.setItem(tasksLocalStorageKey, JSON.stringify(data));
};

export const loadTasksFromLocalStorage = () => {
  let data = JSON.parse(localStorage.getItem(tasksLocalStorageKey));
  if (!data || !Array.isArray(data)) {
    return [];
  }
  return data;
};
