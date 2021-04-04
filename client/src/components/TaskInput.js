import React from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/tasks";

const TaskInput = (props) => {
  const taskOnSubmit = (e) => {
    e.preventDefault();
    if (!e.target.title.value) return;
    props.dispatch(addTask(e.target.title.value));
    e.target.title.value = "";
  };

  return (
    <div>
      <form className="task-input" onSubmit={taskOnSubmit}>
        <input type="text" name="title" className="task-input__input" placeholder="What needs to be done?" autoComplete="off"></input>
        <button className="task-input__button button">Submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTask: dispatch(addTask),
});

export default connect()(TaskInput);
