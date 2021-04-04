const getVisibleTasks = (tasks, filters) => {
  if ("completed" in filters) {
    return tasks.filter((task) => task.completed === filters.completed);
  } else {
    return tasks;
  }
};

export default getVisibleTasks;
