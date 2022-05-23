import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import data from "../data/tasks.json"; 
import {nanoid} from "nanoid"


const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [task, setTasks] = useState(data);
  const getData = (text) => {
    const payload = {
      id: nanoid(5),
      text: text,
      done: false,
      count: 1,
    };
    let res = false;
    task.map((e) => {
      if (e.text === text) {
        res = true;
      }
    })
    if (text !== "" && res === false) {
      setTasks([...task, payload]);
    }
    
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask getData={getData} />
      <Tasks task={task}/>
    </div>
  );
};

export default TaskApp;
