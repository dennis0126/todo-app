import React from "react";
import { connect } from "react-redux";
import getVisibleTasks from "../selectors/tasks";
import TaskListItem from "./TaskListItem";

const TaskList = (props) => (
  <div>
    {props.tasks.map((task) => (
      <TaskListItem key={task.id} {...task} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  tasks: getVisibleTasks(state.tasks, state.filters),
});

export default connect(mapStateToProps)(TaskList);
