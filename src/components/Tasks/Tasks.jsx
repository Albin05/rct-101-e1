import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({task}) => {
  // NOTE: do not delete `data-cy` key value pair
  
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {task.map((e) => {
          return <Task key={e.id} task={e}/>
        })}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
