import React, {useState} from 'react'
import {data} from './data'
import Task from './components/Task'
import TaskForm from './components/TaskForm'

const App = () => {

  const [tasks, setTasks] = useState(data)

  const addTask = text => {
    const newTask = [...tasks, {text}]
    setTasks(newTask)
  }

  const isCompleted = index => {
    const newTask = [...tasks]
    if ( newTask[index].completed ){
      newTask[index].completed = false
    }else{
      newTask[index].completed = true
    }
    setTasks(newTask)
  }

  const removeTask = index => {
    const newTask = [...tasks]
    newTask.splice(index, 1)
    setTasks(newTask)
  }

  return (
    <div>
        {tasks.map( (task, index) => (
          <Task key={index}
          index={index}
          task={task}
          isCompleted={isCompleted}
          removeTask={removeTask}/>
        ))}
      <TaskForm addTask={addTask}/>
    </div>
  );
}

export default App
