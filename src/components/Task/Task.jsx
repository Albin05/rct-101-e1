import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
import remove from "../../assets/remove.svg";

const Task = ({ task }) => {

  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{task.text}</div>
      {/* Counter here */}
      <Counter count={task.count} />
      <button data-cy="task-remove-button"><img src={remove} alt="" /></button>
    </li>
  );
};

export default Task;
