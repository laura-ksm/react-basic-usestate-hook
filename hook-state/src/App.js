import React, {useState} from 'react'
import {data} from './data'
import Task from './components/Task'
import TaskForm from './components/TaskForm'

const App = () => {

  const [task, setTask] = useState(data);

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
