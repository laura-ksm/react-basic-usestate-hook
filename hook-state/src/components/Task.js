import React from 'react'

const Task = ({ task, index, isCompleted, removeTask }) => {

    return (
        <div style={{ textDecoration: task.completed ? "line-through" : "" }}>
            {task.text}
            <button onClick={ () => isCompleted(index) }>Complete</button>
            <button onClick={ () => removeTask(index) }>Delete</button>
        </div>
    )
}

export default Task
