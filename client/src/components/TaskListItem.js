import React from "react";
import { connect } from "react-redux";
import { removeTask, editTask } from "../actions/tasks";

class TaskListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.textInput = React.createRef();
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }
  componentDidUpdate = () => {
    this.state.isEditing && this.textInput.current.focus();
  };
  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }
  escFunction = (e) => {
    if (e.keyCode === 27) {
      this.setState({ isEditing: false });
    }
  };
  handleRemove = () => {
    this.props.dispatch(removeTask(this.props.id));
  };
  handleCompletedToggle = (e) => {
    const completed = e.target.checked;
    this.props.dispatch(editTask(this.props.id, { completed }));
  };
  handleTitleChange = (e) => {
    const title = e.target.value;
    if (title) {
      this.props.dispatch(editTask(this.props.id, { title }));
    } else {
      this.props.dispatch(removeTask(this.props.id));
    }
    this.setState({ isEditing: false });
  };
  handleTitleClick = () => {
    this.setState({ isEditing: true });
  };
  handleTitleChangeSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    this.props.dispatch(editTask(this.props.id, { title }));
    this.setState({ isEditing: false });
  };
  render() {
    return (
      <div
        className={`task-list-item ${this.state.isEditing ? "task-list-item--is-editing" : ""} ${
          this.props.completed ? "task-list-item--completed" : ""
        }`}
      >
        <input
          type="checkbox"
          className="task-list-item__completed-checkbox"
          checked={this.props.completed}
          onChange={this.handleCompletedToggle}
        ></input>
        <div className="task-list-item__title-container">
          <p className="task-list-item__title" onClick={this.handleTitleClick}>
            {this.props.title}
          </p>
          <form onSubmit={this.handleTitleChangeSubmit}>
            <input
              type="text"
              name="title"
              className="task-list-item__title-input"
              ref={this.textInput}
              defaultValue={this.props.title}
              onBlur={this.handleTitleChange}
            ></input>
          </form>
        </div>
        <button className="task-list-item__remove-button" onClick={this.handleRemove}>
          x
        </button>
      </div>
    );
  }
}

export default connect()(TaskListItem);
