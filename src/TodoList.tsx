import { TodoItem} from "./TodoItem";
import React,{useMemo} from "react";
import { todo } from "./TodoItem";



interface OwnProps {
    todos :todo[], toggleTodo : Function, deleteTodo : Function
  }
  
  
export function ToDoList({ todos, toggleTodo, deleteTodo }: OwnProps) {

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