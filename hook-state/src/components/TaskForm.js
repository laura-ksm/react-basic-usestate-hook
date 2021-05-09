import React, {useState} from 'react'

const TaskForm = ({ addTask }) => {
    
    const [text, setText] = useState('')

    const handleTask = e => {
        e.preventDefault()
        if (!text){
            alert('ADD A TASK, PLEASE.')
            return
        }
        addTask({ text })
        setText('')
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
