// crear tarea

import React from 'react'

const TaskForm = ({ addTask }) => {
    
    const [text, setText] = React.useState("");
    // const [completed, setCompleted] = React.useState(false);

    const handleTask = e => {
        e.preventDefault();

        if (!text){
            alert('ADD A TASK, PLEASE.');
            return;
        }
        
        addTask({ text });
        
        setText("");
    }

    return (
        <div>
            <form action="" onSubmit={handleTask}>
                <input
                type="text"
                placeholder="Add task..."
                value={text} 
                onChange={e => setText(e.target.value)}
                />
                <input type="submit" value="Save"/>
            </form>
        </div>
    )
}

export default TaskForm
