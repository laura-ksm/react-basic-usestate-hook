import React, {useState} from 'react'
import {data} from './data'
import Task from './components/Task'
import TaskForm from './components/TaskForm'

const App = () => {

  const [task, setTask] = useState(data);

  const addTask = text => {
    const newTask = [...task, text];
    setTask(newTask);
  }

  return (
    <div>
      {task.map( (element, index) => (
        <Task key={index} index={index} task={element}/>
      ))}
      <TaskForm addTask={addTask}/>
    </div>
  );
}

export default App
