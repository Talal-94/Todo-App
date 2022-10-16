import { useState } from "react"
import { v4 as uuid } from 'uuid';
const TodoForm = ( { addTodo } ) => {
    const [todo, setTodo] = useState({
        id: '',
        task: '', 
        completed: false
    })

    function handleTaskInput(e) {
        setTodo({ ...todo, task: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid.v4()})
            //resetting it again to empty string
            setTodo({...todo, task: '' })
        }
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input
            name = "task"
            type = 'text' 
            value = { todo.task }
            onChange = { handleTaskInput } />
            <button />
        </form>
    )
}

export default TodoForm