import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({getData}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [text, setText] = useState("");
  return (
    <div className={styles.addTask}>
      <input
        data-cy="add-task-input"
        type="text"
        placeholder="Add task..."
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        data-cy="add-task-button"
        onClick={() => {
          getData(text);
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddTask;
