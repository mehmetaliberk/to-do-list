import { TodoItem} from "./TodoItem";
import React,{useMemo} from "react";



export function ToDoList({todos, toggleTodo, deleteTodo}){
    const items = useMemo(() => {
        return todos.map(todo => {
            return(
                <TodoItem
                    {...todo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            )
        })
    },[todos, toggleTodo, deleteTodo])

    return(
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {items}
        </ul>
    )
}