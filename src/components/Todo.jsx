import { useState } from "react";
function Todo({todo, onUpdate, onDelete}){
    const [isEdit , setIsEdit] = useState(false);

    function FormEdit(){
        const [newValue, setNewValue] = useState(todo.title)
        function handleSubmit(e){
            e.preventDefault();
        }
        function handleChange(e){
            const value = e.target.value;
            setNewValue(value)
        }
        function handleClickUpdate(){
            onUpdate(todo.id, newValue)
            setIsEdit(false)
        }

        return <form className="todoInfo" onSubmit={handleSubmit}>
            <input className="todoInput" type="text" onChange={handleChange} value={newValue}/>
            <input className="button" type="submit" value='Update'onClick={handleClickUpdate}/>
        </form>
    }

    function TodoElement(){
        return <div>{todo.title}
        <button onClick={() => setIsEdit(true)}>Edit</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    }

    return(
        <div className="todo">
            {isEdit? <FormEdit/> : <TodoElement/>}
        </div>)
}
export default Todo;