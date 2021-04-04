import React from "react";
import { connect } from "react-redux";
import { setFilterAll, setFilterActive, setFilterCompleted } from "../actions/filters";

const TaskFilterControl = (props) => {
  const onSetFilterAll = () => {
    props.dispatch(setFilterAll());
  };
  const onSetFilterActive = () => {
    props.dispatch(setFilterActive());
  };
  const onSetFilterCompleted = () => {
    props.dispatch(setFilterCompleted());
  };
  return (
    <div>
      <button
        className={`task-filter-control__button ${props.completed === undefined ? "task-filter-control__button--active" : ""}`}
        onClick={onSetFilterAll}
      >
        All
      </button>
      <button
        className={`task-filter-control__button ${props.completed === false ? "task-filter-control__button--active" : ""}`}
        onClick={onSetFilterActive}
      >
        Active
      </button>
      <button
        className={`task-filter-control__button ${props.completed === true ? "task-filter-control__button--active" : ""}`}
        onClick={onSetFilterCompleted}
      >
        Completed
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  completed: state.filters.completed,
});

export default connect(mapStateToProps)(TaskFilterControl);
