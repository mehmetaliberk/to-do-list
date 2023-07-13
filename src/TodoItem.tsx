

export interface todo{
    completed : boolean
    id : number;
    title : string;
    toggleTodo? : Function;
    deleteTodo? : Function;
}

export function TodoItem(TodoItem : todo){

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