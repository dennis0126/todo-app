import React from "react";

import Header from "./Header";
import TaskInput from "./TaskInput";
import TaskListSummary from "./TaskListSummary";
import TaskList from "./TaskList";

// Styles
import "../stylesheets/main.scss";
import "normalize.css";

const App = (props) => (
  <div className="content-container">
    <Header />
    <TaskInput />
    <TaskListSummary />
    <TaskList />
  </div>
);

export default App;
