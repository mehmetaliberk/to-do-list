import { TodoItem} from "./TodoItem";
import React,{useMemo} from "react";
import { Todo } from "./TodoItem";



interface OwnProps {
    todos :Todo[], toggleTodo : Function, deleteTodo : Function
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