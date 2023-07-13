import { useEffect, useState,useCallback } from "react";
import { NewToDoForm } from "./NewToDoForm";
import "./styles.css"
import { ToDoList } from "./TodoList";
import { Todo } from "./TodoItem";




export default function App(){
const[todos,setTodos]=useState<Todo[]>(()=>{
const localValue = localStorage.getItem("ITEMS")
if (localValue == null) return[]

return JSON.parse(localValue)
})

useEffect(()=>{
  localStorage.setItem("ITEMS",JSON.stringify(todos))
},[todos])

const addTodo = useCallback((title : string) => {
  setTodos((currentTodos: Todo[]) => {
    return [
      ...currentTodos, {id: crypto.randomUUID(), title, completed: false},
    ]
  })
}, [setTodos])


const toggleTodo = useCallback((id : string , completed :boolean | undefined) => {
  setTodos((currentTodos) => {
    return currentTodos.map(todo => {
      if(todo.id === id){
        return { ...todo, completed}
      }

      return todo
    })
  })
},[setTodos])

const deleteTodo = useCallback((id : string) => {
  setTodos((currentTodos: Todo[]) => {
    return currentTodos.filter(todo => todo.id !== id)
  })
},[setTodos])

return (
  <>
  <NewToDoForm onSubmit={addTodo}/>
  <h1 className="header">Todo List</h1>
  <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
)

}
