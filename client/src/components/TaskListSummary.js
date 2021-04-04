import React from "react";
import { connect } from "react-redux";
import TaskFilterControl from "./TaskFilterControl";

const TaskListSummary = (props) => (
  <div className="task-list-summary">
    <span className="task-list-summary__count">
      {props.taskCount} {props.taskCount > 1 ? "items" : "item"}
    </span>
    <TaskFilterControl />
  </div>
);

const mapStateToProps = (state) => ({
  taskCount: state.tasks.length,
});
export default connect(mapStateToProps)(TaskListSummary);
