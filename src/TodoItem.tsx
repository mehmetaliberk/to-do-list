

export interface Todo{
    completed? : boolean
    id : string;
    title : string;
    toggleTodo? : Function;
    deleteTodo? : Function;
}

export function TodoItem(TodoItem : Todo){

    return(
        <li>
            <label>
                <input 
                type="checkbox"
                checked={TodoItem.completed}
                onChange={e=> TodoItem.toggleTodo ? TodoItem.toggleTodo(TodoItem.id, e.target.checked): undefined}
                />
                {TodoItem.title}
            </label>
            <button onClick={()=> TodoItem.deleteTodo ? TodoItem.deleteTodo(TodoItem.id): undefined} className="btn btn-danger">
                Delete
            </button>
        </li>
    )
}